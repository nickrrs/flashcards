import { ArrowRight } from "lucide-react";

type TimelineRowProps = {
    label: string;
    before: string;
    after: string;
  };

export default function TimelineRow({ label, before, after }: TimelineRowProps) {
    return (
      <div className="mb-4 last:mb-0">
        <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex-1 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-gray-500">
            {before}
          </div>
          <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
          <div className="flex-1 rounded-lg bg-[#2b33ff]/10 border border-[#2b33ff]/20 px-3 py-2 text-gray-800">
            {after}
          </div>
        </div>
      </div>
    );
  }