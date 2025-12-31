"use client";

import { useSupport } from "@/contexts/SupportContext";
import FAQItem from "./FAQItem";

const SUPPORT_FAQS = [
  {
    question: "What types of therapy or support do you offer?",
    answer:
      "We offer individual therapy, couples and family therapy, group support, and specialized programs for anxiety, stress, and trauma. Our approach is tailored to meet you where you are.",
  },
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy can help with many concerns—from daily stress to deeper challenges. If you're wondering, that's often a sign it might be helpful. We offer a free 15-minute check-in to explore what support looks like for you.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with various insurance plans and also offer sliding scale options. During your initial consultation, we'll discuss payment options that work for your situation.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Individual sessions typically last 50 minutes. Couples and family sessions may be longer. We'll discuss session length and frequency based on your needs.",
  },
  {
    question: "Can I choose my therapist?",
    answer:
      "Yes. We'll work with you to find a therapist who feels like a good fit. You can share preferences about style, background, or specialization, and we'll match you accordingly.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's completely normal. Many people start without a clear sense of what they need. We can help you figure it out together during your initial check-in.",
  },
  {
    question: "Do you offer support for families?",
    answer:
      "Yes. We offer family therapy and support that considers the whole system, not just one person. We believe in care that supports everyone involved.",
  },
  {
    question: "How is Sankofa different from other mental health providers?",
    answer:
      "Our work is grounded in community, cultural understanding, and practical care that meets people where they are. We focus on building trust and creating spaces where people feel seen and understood.",
  },
];

const PARTNER_FAQS = [
  {
    question: "What kinds of partnerships do you offer?",
    answer:
      "We collaborate with organizations through workshops, trainings, referrals, and community-based programs.",
  },
  {
    question: "Do you offer workshops or trainings for teams?",
    answer:
      "Yes. We offer mental health workshops tailored to organizations, workplaces, and community groups.",
  },
  {
    question: "Can we customize a program for our organization or community?",
    answer:
      "Absolutely. We work closely with partners to design support that fits their needs.",
  },
  {
    question: "Do you work with nonprofits, schools, or community organizations?",
    answer:
      "Yes. We regularly partner with organizations serving diverse and underserved communities.",
  },
  {
    question: "How do we start a conversation about partnering?",
    answer:
      "You can reach out through the website, and we'll schedule a short conversation to explore fit.",
  },
  {
    question: "Do you accept donations or sponsorships?",
    answer:
      "Yes. Support helps us expand access to mental health care in the community.",
  },
  {
    question: "How is Sankofa different from other mental health providers?",
    answer:
      "Our work is grounded in community, cultural understanding, and practical care that meets people where they are.",
  },
  {
    question:
      "Who should reach out if they're interested in supporting your mission?",
    answer:
      "Anyone interested in collaboration, funding, or community impact is welcome to contact us.",
  },
];

export default function FAQSection() {
  const { selectedPath } = useSupport();

  if (!selectedPath) {
    return null;
  }

  const faqs = selectedPath === "support" ? SUPPORT_FAQS : PARTNER_FAQS;

  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-6 pb-16 md:px-12">
      <div className="flex flex-col">
        <div className="mb-16 text-center">
          <h2 className="font-title text-4xl font-semibold tracking-tight text-[#2d2c2b] md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

