import { ChevronDown, HelpCircle } from "lucide-react";
import { useFAQSection } from "@/app/hooks/useFAQSection";

export default function FAQSection() {
  const { faqs } = useFAQSection();
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide">
            faq
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions, answered.
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Still unsure if flashcards fits your workflow? Here are the most
            common questions from early users.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-zinc-100/20 p-4 flex flex-col gap-2"
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

