/**
 * Scrape Team Images Script
 * 
 * This script scrapes the Sankofa Family Counseling Services team page
 * and downloads all team member images, extracting names, titles, and bios.
 * 
 * Usage:
 *   npm run scrape-team
 * 
 * The script will:
 * 1. Fetch the team page HTML
 * 2. Parse and extract all team member information (name, title, bio, image)
 * 3. Download images to public/team-images/
 * 4. Generate a team-members.json file with complete member data
 */

import * as cheerio from 'cheerio';
import * as fs from 'fs/promises';
import * as path from 'path';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  filename: string;
}

const TEAM_PAGE_URL = 'https://www.sankofafamilycounseling.com/team-4';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'team-images');

async function fetchHTML(url: string): Promise<string> {
  console.log(`Fetching ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return await response.text();
}

async function downloadImage(imageUrl: string, filepath: string): Promise<void> {
  console.log(`Downloading ${imageUrl}...`);
  
  // Handle relative URLs
  const fullUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : new URL(imageUrl, TEAM_PAGE_URL).toString();
  
  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error(`Failed to download ${fullUrl}: ${response.statusText}`);
  }
  
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  await fs.writeFile(filepath, buffer);
  console.log(`✓ Saved to ${filepath}`);
}

function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractTitle(nameAndTitle: string): { name: string; title: string } {
  // Name format is typically "FirstName LastName, Title" or "FirstName LastName Title"
  // Examples: "Khadijah Tillman, LCSW-R" or "Dr. Kiah Nyame, Ed.D, CPE, LPC, LEC"
  const parts = nameAndTitle.split(',').map(s => s.trim());
  
  if (parts.length > 1) {
    // Has comma-separated title
    return {
      name: parts[0],
      title: parts.slice(1).join(', '),
    };
  }
  
  // Try to extract title from end if it looks like credentials
  const credentialPattern = /(LCSW-R?|LMSW|LCSW|MFT|PhD|Ed\.D|LPC|LEC|CASAC-T|CPE|M\.D|MD|PsyD)\s*$/i;
  const match = nameAndTitle.match(/(.+?)\s+((?:Dr\.\s+)?[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s+(?:[A-Z]\.?,?\s*)+)$/);
  
  if (match) {
    return {
      name: match[1].trim(),
      title: match[2].trim(),
    };
  }
  
  // Default: assume entire string is name
  return {
    name: nameAndTitle,
    title: '',
  };
}

function cleanBio(bio: string): string {
  // Clean up the bio text
  return bio
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
}

async function scrapeTeamImages(): Promise<void> {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    // Fetch the team page
    const html = await fetchHTML(TEAM_PAGE_URL);
    const $ = cheerio.load(html);
    
    const teamMembers: TeamMember[] = [];
    
    // Strategy: Find containers that likely contain team member info
    // Look for sections with images and text nearby
    
    // First, let's try to find structured team member sections
    // Common patterns: divs with images and text, articles, etc.
    
    // Find all images that could be team photos (exclude small icons)
    $('img').each((_, imgElement) => {
      const $img = $(imgElement);
      let src = $img.attr('src') || $img.attr('data-src') || $img.attr('data-lazy-src');
      
      if (!src) return;
      
      // Skip small images (likely icons) and non-team images
      const skipPatterns = [
        'logo', 'icon', 'sankofa-bird', 
        'facebook', 'twitter', 'linkedin', 'social',
        'arrow', 'button', 'badge'
      ];
      
      const srcLower = src.toLowerCase();
      if (skipPatterns.some(pattern => srcLower.includes(pattern))) {
        return;
      }
      
      // Skip very small images (likely icons) - check dimensions or URL params
      if (src.includes('w_25') || src.includes('h_25') || 
          src.includes('w_50') || src.includes('h_50')) {
        return;
      }
      
      // Convert relative URLs to absolute
      if (src.startsWith('//')) {
        src = 'https:' + src;
      } else if (src.startsWith('/')) {
        src = new URL(src, TEAM_PAGE_URL).toString();
      } else if (!src.startsWith('http')) {
        src = new URL(src, TEAM_PAGE_URL).toString();
      }
      
      // Find the closest container that might have team member info
      const $container = $img.closest('div, article, section, figure, li');
      
      // Extract name and title from headings in the container
      let nameAndTitle = '';
      const $heading = $container.find('h1, h2, h3, h4, h5, h6').first();
      if ($heading.length > 0) {
        nameAndTitle = $heading.text().trim();
      }
      
      // If no heading, try to find name in other elements
      if (!nameAndTitle || nameAndTitle.length < 3) {
        const $nameElements = $container.find('strong, b, [class*="name"], [class*="title"]');
        for (let i = 0; i < $nameElements.length; i++) {
          const text = $($nameElements[i]).text().trim();
          if (text.length > 5 && text.length < 100 && 
              !text.toLowerCase().includes('read more') &&
              !text.toLowerCase().includes('facebook') &&
              !text.toLowerCase().includes('twitter')) {
            nameAndTitle = text;
            break;
          }
        }
      }
      
      // If still no name, try alt text
      if (!nameAndTitle || nameAndTitle.length < 3) {
        nameAndTitle = $img.attr('alt') || '';
      }
      
      // Extract bio - look for paragraph text in the container
      let bio = '';
      const $paragraphs = $container.find('p');
      const bioTexts: string[] = [];
      
      $paragraphs.each((_, pElement) => {
        const text = $(pElement).text().trim();
        // Skip short text, links, and social media text
        if (text.length > 50 && 
            !text.toLowerCase().includes('read more') &&
            !text.toLowerCase().includes('facebook') &&
            !text.toLowerCase().includes('twitter') &&
            !text.toLowerCase().includes('linkedin')) {
          bioTexts.push(text);
        }
      });
      
      bio = cleanBio(bioTexts.join(' '));
      
      // If no bio found, try to find text in the container
      if (!bio || bio.length < 50) {
        const containerText = $container.text().trim();
        const lines = containerText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        
        // Find the first substantial paragraph after the name
        let foundName = false;
        for (const line of lines) {
          if (foundName && line.length > 50 && 
              !line.toLowerCase().includes('read more') &&
              !line.toLowerCase().includes('facebook')) {
            bio = cleanBio(line);
            break;
          }
          if (line.toLowerCase().includes(nameAndTitle.toLowerCase().split(' ')[0])) {
            foundName = true;
          }
        }
      }
      
      // If we don't have a name, skip this image
      if (!nameAndTitle || nameAndTitle.length < 3) {
        // Try extracting from filename as last resort
        try {
          const urlParts = src.split('/');
          const filename = urlParts[urlParts.length - 1].split('?')[0];
          nameAndTitle = decodeURIComponent(filename)
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_+]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        } catch (e) {
          return; // Skip if we can't extract a name
        }
      }
      
      // Extract name and title
      const { name, title } = extractTitle(nameAndTitle);
      
      // Skip if name is too short or looks like a filename
      if (name.length < 3 || name.includes('.jpg') || name.includes('.png')) {
        return;
      }
      
      // Get file extension
      let extension = '.jpg';
      try {
        const urlPath = new URL(src).pathname;
        const ext = path.extname(urlPath);
        if (ext && ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext.toLowerCase())) {
          extension = ext;
        }
      } catch (e) {
        // Use default
      }
      
      // Create filename
      const filename = `${sanitizeFilename(name)}${extension}`;
      
      teamMembers.push({
        name,
        title: title || 'Team Member',
        bio: bio || `${name} is a valued member of the Sankofa Family Counseling Services team.`,
        imageUrl: src,
        filename,
      });
    });
    
    // Remove duplicates based on imageUrl
    const uniqueMembers = Array.from(
      new Map(teamMembers.map(m => [m.imageUrl, m])).values()
    );
    
    // Also remove duplicates based on similar names
    const finalMembers: TeamMember[] = [];
    const seenNames = new Set<string>();
    
    for (const member of uniqueMembers) {
      const nameKey = member.name.toLowerCase().replace(/\s+/g, '');
      if (!seenNames.has(nameKey)) {
        seenNames.add(nameKey);
        finalMembers.push(member);
      }
    }
    
    console.log(`\nFound ${finalMembers.length} team members:\n`);
    finalMembers.forEach((member, index) => {
      console.log(`${index + 1}. ${member.name}${member.title ? ` - ${member.title}` : ''}`);
      console.log(`   Bio: ${member.bio.substring(0, 80)}${member.bio.length > 80 ? '...' : ''}`);
      console.log(`   Image: ${member.filename}\n`);
    });
    
    // Download all images
    console.log(`\nDownloading images to ${OUTPUT_DIR}...\n`);
    
    for (const member of finalMembers) {
      const filepath = path.join(OUTPUT_DIR, member.filename);
      
      try {
        await downloadImage(member.imageUrl, filepath);
      } catch (error) {
        console.error(`Error downloading ${member.name}:`, error);
      }
    }
    
    // Save metadata JSON file with complete information
    const metadata = finalMembers.map(m => ({
      name: m.name,
      title: m.title,
      bio: m.bio,
      filename: m.filename,
      imageUrl: m.imageUrl,
    }));
    
    const metadataPath = path.join(OUTPUT_DIR, 'team-members.json');
    await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2));
    console.log(`\n✓ Metadata saved to ${metadataPath}`);
    
    console.log(`\n✅ Done! Downloaded ${finalMembers.length} team member images with bios.`);
    
  } catch (error) {
    console.error('Error scraping team images:', error);
    process.exit(1);
  }
}

// Run the script
scrapeTeamImages();
