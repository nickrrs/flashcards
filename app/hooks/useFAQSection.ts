export interface FAQ {
  question: string;
  answer: string;
}

export function useFAQSection() {
  const faqs: FAQ[] = [
    {
      question: "What makes flashcards different from a regular notes app?",
      answer:
        "Flashcards is built around small, atomic cards tied to real-life contexts. Instead of long documents, you capture the exact detail you don't want to forget and review it when it matters.",
    },
    {
      question: "Do I need to manually review cards every day?",
      answer:
        "No. You can dip in and out whenever you like. The goal is to make capturing and revisiting important details feel lightweight, not like homework.",
    },
    {
      question: "Is this only for developers?",
      answer:
        "Not at all. Developers, designers, founders, and students use flashcards for commands, workflows, recipes, decisions—anything that would hurt to forget.",
    },
    {
      question: "How does AI actually help?",
      answer:
        "AI can expand, explain, and organize your cards. It can turn a raw snippet into a clear explanation, or group related cards so you review with context.",
    },
    {
      question: "Can I export my data later?",
      answer:
        "Yes. Your data is yours. You'll be able to export your cards so you're never locked in.",
    },
    {
      question: "What if I'm just getting started?",
      answer:
        "Start tiny. Capture one thing per day that you would normally forget—a command, a config, or a decision. The habit compounds quickly.",
    },
  ];

  return {
    faqs,
  };
}
