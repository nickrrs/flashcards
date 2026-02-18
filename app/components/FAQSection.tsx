import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
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

export default function FAQSection() {
  return (
    <section className="w-full bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide">
            faq
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions, answered.
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Still unsure if flashcards fits your workflow? Here are the most
            common questions from early users.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-zinc-50 p-4 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#3590ff]/10 flex items-center justify-center">
                    <HelpCircle className="w-4 h-4 text-[#2b33ff]" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 text-left">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 text-left">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

