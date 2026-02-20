import { CheckCircle2, Sparkles, TimerReset } from "lucide-react";
import TimelineRow from "./cards/TimelineRow";

function TransformationItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="w-4 h-4 mt-1 text-[#2b33ff]" />
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  );
}

export default function TransformationSection() {
  return (
    <section className="w-full border-y border-gray-100 bg-linear-to-b from-white via-zinc-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide text-center md:text-left">
            customer transformation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
            From &quot;I&apos;ll remember this later&quot; to{" "}
            <span className="text-[#2b33ff]">“it&apos;s already saved”.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
            flashcards turns every small but important detail into a card you can
            actually revisit. Instead of losing context, you build a second brain
            tailored to your real life.
          </p>

          <ul className="space-y-3">
            <TransformationItem text="Capture commands, configs, and insights in seconds while you work." />
            <TransformationItem text="Review the right things at the right time with AI-curated decks." />
            <TransformationItem text="Build durable knowledge instead of random, scattered notes." />
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-gray-200 bg-linear-to-br from-white to-zinc-50 p-5 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-[#2b33ff] uppercase tracking-wide">
                  before
                </p>
                <p className="text-sm text-gray-500">
                  Trying to remember everything from memory.
                </p>
              </div>
              <TimerReset className="w-5 h-5 text-gray-400" />
            </div>
            <TimelineRow
              label="When you solve a tricky bug"
              before="A screenshot buried in your photos."
              after="A flashcard with the command, output, and context."
            />
            <TimelineRow
              label="When you read something valuable"
              before="A tab you swear you&apos;ll come back to."
              after="A summarized card with the key takeaway."
            />
            <TimelineRow
              label="When you learn a new workflow"
              before="A one-off note lost in a doc."
              after="A small deck you can review in minutes."
            />
          </div>

          <div className="absolute -top-4 -right-4 rounded-xl bg-linear-to-br from-[#2b33ff] to-[#2a7ae6] text-white px-4 py-3 shadow-lg flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              never forget small things
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

