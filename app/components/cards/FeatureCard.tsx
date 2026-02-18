interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    visual: React.ReactNode;
}

export default function FeatureCard({ icon, title, description, visual }: FeatureCardProps) {
    return (
        <div className="relative max-h-[563px] max-w-[588px] p-8 group bg-[#FDFDFD] transition-all duration-500 hover:bg-[#F9F9F9] saturate-100 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md cursor-pointer">
          <div className="flex items-center space-x-2.5 mb-4">
            <div className="relative w-7 h-7 rounded-lg bg-[#e2e2e2] flex items-center justify-center text-black group-hover:text-white group-hover:bg-[#2b33ff]">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          {visual}
        </div>
      );
}