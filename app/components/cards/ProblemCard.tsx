type ProblemCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
  };

export default function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <div className="h-full rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm flex flex-col gap-2">
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#3590ff]/10 mb-1">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}