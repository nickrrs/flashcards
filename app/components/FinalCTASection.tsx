import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="w-full bg-linear-to-b from-zinc-50 via-white to-zinc-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
        <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide">
          ready when you are
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stop trusting your memory with what actually matters.
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Capture tiny but important details as flashcards, get AI-powered
          insights, and review them when it counts. Build a system that
          remembers for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-linear-to-br from-[#2b33ff] to-[#2a7ae6] shadow-md shadow-[#2b33ff]/30 transition-colors"
          >
            create your first flashcard
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#2b33ff] bg-white border border-[#2b33ff]/20 hover:border-[#2b33ff] hover:bg-[#2b33ff]/5 transition-colors"
          >
            already have an account?
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          No spam. No pressure. Just a simple way to never forget small things.
        </p>
      </div>
    </section>
  );
}

