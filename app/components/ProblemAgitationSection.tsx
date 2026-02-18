import { ZapIcon } from "@/components/ui/zap";
import { ScanTextIcon } from "@/components/ui/scan-text";
import { ClockIcon } from "@/components/ui/clock";
import { BadgeAlertIcon } from "@/components/ui/badge-alert";
import ProblemCard from "./cards/ProblemCard";

export default function ProblemAgitationSection() {
  return (
    <section className="w-full border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
        <div>
          <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide">
            the real problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            you don&apos;t forget because you&apos;re lazy.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            you forget because important information is scattered across notes, chats,
            screenshots, and tabs. by the time you need it again, it&apos;s gone.
          </p>
          <p className="text-base text-gray-500">
            the cost is subtle but real: context switching, re-searching, and
            relearning the same things over and over. it slows you down and
            quietly kills momentum on the projects that matter.
          </p>
        </div> 

        <div className="grid gap-4 sm:grid-cols-2">
          <ProblemCard
            icon={<ClockIcon size={20} className="text-[#2b33ff]" />}
            title="wasting time relearning"
            description="you spend hours re-googling commands, setups, and fixes you already solved last week."
          />
          <ProblemCard
            icon={<ScanTextIcon size={20} className="text-[#2b33ff]" />}
            title="notes with no context"
            description="scattered docs and sticky notes make it hard to remember why something mattered in the first place."
          />
          <ProblemCard
            icon={<BadgeAlertIcon size={20} className="text-[#2b33ff]" />}
            title="important details disappear"
            description="small but critical details—apis, configs, decisions—vanish when you need them most."
          />
          <ProblemCard
            icon={<ZapIcon size={20} className="text-[#2b33ff]" />}
            title="broken focus"
            description="context switching and searching interrupt deep work and make it harder to ship consistently."
          />
        </div>
      </div>
    </section>
  );
}
