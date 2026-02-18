"use client";

import { useGroupHoverOrInView } from "@/app/hooks/useGroupHoverOrInView";
import SingleFolder from "./SingleFolder";

interface FolderContext {
  name: string;
  fileCount: number;
}

/**
 * Componente de animação com múltiplas pastas representando diferentes contextos
 */
export default function FolderAnimation() {
  const { isHovered, elementRef } = useGroupHoverOrInView();

  const contexts: FolderContext[] = [
    { name: "Git", fileCount: 2 },
    { name: "Cooking", fileCount: 2 },
    { name: "Docker", fileCount: 2 },
  ];

  return (
    <div
      ref={elementRef}
      className="relative w-full h-32 md:h-40 flex items-end justify-center mt-6 overflow-visible"
    >
      {/* Container com múltiplas pastas */}
      <div className="relative flex items-end justify-center gap-4 md:gap-8 flex-wrap">
        {contexts.map((context) => (
          <div key={context.name} className="flex flex-col items-center gap-1.5">
            <SingleFolder isOpen={isHovered} fileCount={context.fileCount} />
            <span className="text-xs font-medium text-gray-600 text-center">{context.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
