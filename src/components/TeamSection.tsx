"use client";

import { useSupport } from "@/contexts/SupportContext";
import TeamCarousel from "./TeamCarousel";

const TEAM_MEMBERS = [
  {
    name: "Khadijah Tillman",
    title: "LCSW-R, Owner",
    imageSrc: "/team-images/214a3907-edit-jpg.jpg",
    bgColor: "#FFB3D9", // Bright pink
    bio: "Ms. Khadijah Tillman is a licensed clinical social worker and owner of Sankofa Family Counseling Services. She provides psychotherapy services to adults, children and families.",
  },
  {
    name: "Traci C. Terrance",
    title: "PhD, LCSW",
    imageSrc: "/team-images/214a3828-edit-jpg.jpg",
    bgColor: "#A8E6CF", // Bright mint green
    bio: "Dr. Terrance enjoys working with adults, as well as children and families. Trained in EMDR, Traci is a trauma-informed and systems-oriented therapist that integrates a variety of approaches to support healing and growth.",
  },
  {
    name: "Jennifer Blais",
    title: "LMSW",
    imageSrc: "/team-images/jennifer-b-picture-jpg.jpg",
    bgColor: "#FFD4A3", // Bright peach
    bio: "Jennifer Blais is a licensed Master of Social Work, LMSW. She has over fifteen years of experience supporting the goals and needs of under-served communities, including immigrant and refugee populations.",
  },
  {
    name: "Imani T. Wagstaff",
    title: "MFT",
    imageSrc: "/team-images/imani-photo-jpg.jpg",
    bgColor: "#87CEEB", // Bright sky blue
    bio: "Mr. Imani T. Wagstaff is a Marriage and Family Therapist (MFT). He received his professional training at Medaille College in Buffalo, NY. Collectively, Mr. Wagstaff has over 20 years of experience providing therapeutic support to individuals, couples, and families.",
  },
  {
    name: "Jacquelina Pirela",
    title: "LMSW",
    imageSrc: "/team-images/214a3840-edit-jpg.jpg",
    bgColor: "#C8A8FF", // Bright purple
    bio: "Jacquelina Pirela is a licensed master of social work (LMSW) who graduated from The State University At Brockport cum laude with a bachelors in social work in 2009. She then worked in the field under various roles providing support to diverse communities.",
  },
  {
    name: "Shiyandra Coins",
    title: "LMSW",
    imageSrc: "/team-images/shiynadra-coins-pro-pic-edited-jpg.jpg",
    bgColor: "#FFB3D9", // Bright pink
    bio: "Shiyandra \"Shiy\" Coins graduated from Keuka College in 2017 with her BSW, also receiving the Jane Addams award for service and commitment. In 2020, Shiy graduated from Nazareth College with her MSW and brings a passion for supporting individuals and families.",
  },
  {
    name: "Dr. Kiah Nyame",
    title: "Ed.D, CPE, LPC, LEC",
    imageSrc: "/team-images/214a3744-edit-jpg.jpg",
    bgColor: "#A8E6CF", // Bright mint green
    bio: "Dr. Kiah E. Nyame states his greatest passion is to bring children and families that have experienced traumatic and/or stressful social and cultural events, to a place of finding wellness. Helping individuals navigate challenges and discover their strengths is central to his practice.",
  },
  {
    name: "Khadijah Tillman",
    title: "LCSW-R, Owner",
    imageSrc: "/team-images/214a3907-edit-jpg.jpg",
    bgColor: "#FFB3D9", // Bright pink
    bio: "Ms. Khadijah Tillman is a licensed clinical social worker and owner of Sankofa Family Counseling Services. She provides psychotherapy services to adults, children and families.",
  },
  {
    name: "Persephone Modeste",
    title: "Certified Professional Counselor",
    imageSrc: "/team-images/214a3792-edit-jpg.jpg",
    bgColor: "#FFD4A3", // Bright peach
    bio: "Persephone Modeste is a certified professional school and community counselor in the process of gaining licensure as a mental health counselor from the University of Rochester Warner School of Education. She is dedicated to providing supportive counseling services to her community.",
  },
  {
    name: "Latrina Ashton-Harrell",
    title: "LMSW",
    imageSrc: "/team-images/latrina-pic-jpg.jpg",
    bgColor: "#87CEEB", // Bright sky blue
    bio: "Latrina Ashton-Harrell is a Licensed Master Social Worker (LMSW). In 2012 she graduated from The Greater Rochester Collaborative Program between the State University of Brockport and Nazareth College, bringing years of experience to support individuals and families.",
  },
  {
    name: "Shiann Brown-Atuegbu",
    title: "LMSW, CASAC-T",
    imageSrc: "/team-images/img-3734-jpg.jpg",
    bgColor: "#C8A8FF", // Bright purple
    bio: "Shiann Brown-Atuegbu is a Licensed Master Social Worker who also holds her Credentialed Alcoholism and Substance Abuse Counselor trainee certificate. For more than 25 years she's worked with people navigating substance use challenges and mental health concerns, providing compassionate and effective support.",
  },
  {
    name: "Shadia McAnally",
    title: "LMSW",
    imageSrc: "/team-images/shadia-website-pic-jpeg.jpeg",
    bgColor: "#FFB3D9", // Bright pink
    bio: "Shadia is a licensed Masters of Social Work (LMSW) practitioner who provides psychotherapy to adults and teens. She is also the intake coordinator at Sankofa Family Counseling Services. Shadia is committed to the mission of Sankofa Family Counseling Services to provide effective, compassionate, and culturally responsive mental health services to improve people's lives.",
  },
  {
    name: "Antoinette Poole",
    title: "LCSW",
    imageSrc: "/team-images/image-ap-edited-jpg.jpg",
    bgColor: "#A8E6CF", // Bright mint green
    bio: "Antoinette Poole is a Licensed Clinical Social Worker (LCSW). She received a MSW graduate degree from Binghamton University – State University of New York, Master of Social Work program and BA in Psychology from St. John Fisher College. She has worked in the field of substance use disorders and mental health for 9 years.",
  },
];

export default function TeamSection() {
  const { selectedPath } = useSupport();

  // Only show for support path
  if (selectedPath !== "support") {
    return null;
  }

  return (
    <section className="w-full bg-accent-deep pt-24 pb-24">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-8 md:px-16 mb-20">
        <div className="text-center">
          <h2 className="font-title text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Care grounded in culture and community
          </h2>
          <p className="mt-6 font-body text-lg text-white/90 md:text-xl max-w-3xl mx-auto">
            Our team of licensed therapists brings cultural understanding, lived
            experience, and deep care into every conversation. We meet people
            where they are, with respect for their stories and communities.
          </p>
          <button className="mt-8 rounded-full bg-white px-8 py-4 font-body text-base font-medium text-accent transition-colors hover:bg-white/90 cursor-pointer">
            Meet the team
          </button>
        </div>
      </div>

      {/* Team Carousel - Full Width */}
      <TeamCarousel members={TEAM_MEMBERS} />
    </section>
  );
}

