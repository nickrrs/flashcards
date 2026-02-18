"use client";

import FeatureCard from "./FeatureCard";
import { Plus } from "lucide-react";
import { useCreateFlashcardDemo } from "@/app/hooks/useCreateFlashcardDemo";

export default function CreateFlashcardDemo() {
    const { titleText, descriptionText, containerRef } = useCreateFlashcardDemo();

    return (
        <div ref={containerRef} className="w-full h-full group">
          <FeatureCard
            icon={<Plus className="w-4 h-4" />}
            title="Create Flashcards"
            description="Add flashcards with optional titles and descriptions. Perfect for commands, recipes, notes, or anything you want to remember."
            visual={
              <div className="mt-6 p-5 bg-linear-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      Title (optional)
                    </label>
                    <div className="h-8 bg-white border border-gray-200 rounded px-3 flex items-center">
                      <span className="text-xs md:text-sm text-gray-600">{titleText}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      Description
                    </label>
                    <div className="h-20 bg-white border border-gray-200 rounded px-3 py-2 flex items-start">
                      <span className="text-xs md:text-sm text-gray-600">{descriptionText}</span>
                    </div>
                  </div>
                  <button 
                    className="w-full py-2 bg-[#2b33ff] text-white rounded-lg text-sm font-semibold cursor-pointer transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Create Flashcard
                  </button>
                </div>
            </div>
          }
          />
        </div>
      );
}