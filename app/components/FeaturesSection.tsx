"use client";

import { FolderTree, Brain, Sparkles, Clock } from "lucide-react";
import FeatureCard from "./cards/FeatureCard";
import TimelineActivity from "./cards/TimelineActivity";
import CreateFlashcardDemo from "./cards/CreateFlashcardDemo";
import FolderAnimation from "./cards/FolderAnimation";
import { useAIAnalysisCard } from "@/app/hooks/useAIAnalysisCard";

export default function FeaturesSection() {
  const { formattedText, containerRef } = useAIAnalysisCard();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide text-center md:text-left">
          powerful features
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center md:text-left">
          built for seamless memorization
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center md:text-left">
          organize, create, and learn with AI-powered insights. never forget what matters most.
        </p>
      </div>

      {/* Grid 2x2 */}
      <div className="relative grid w-full grid-cols-1 md:grid-cols-2 md:auto-rows-[450px] gap-6 justify-items-center md:justify-items-stretch items-stretch">
        {/* 1. Organize by Context */}
        <FeatureCard
          icon={<FolderTree className="w-4 h-4" />}
          title="Organize by Context"
          description="Group your flashcards into contexts like 'Git Commands', 'Cooking Recipes', or any topic that makes sense for you."
          visual={<FolderAnimation />}
        />

        {/* 2. Create Flashcards */}
        <CreateFlashcardDemo />

        {/* 3. AI Analysis */}
        <div ref={containerRef} className="w-full group h-full">
          <FeatureCard
            icon={<Brain className="w-4 h-4" />}
            title="AI-Powered Analysis"
            description="Get detailed explanations and insights powered by AI. Understand your flashcards better with intelligent analysis."
            visual={
            <div className="mt-6 relative">
              <div className="p-5 bg-linear-to-br from-[#2b33ff] to-[#2a7ae6] rounded-xl text-white relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(43,51,255,0.3)] transition-shadow duration-500">
                {/* Efeito de glow animado da esquerda para direita */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent w-1/3 animate-shimmer"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5" />
                    <span className="text-sm font-semibold">AI Analysis</span>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">
                    Command used to add files to the staging area of Git. This prepares your changes to be committed in the next step.
                  </p>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#2b33ff]" />
              </div>
              {/* Título "Powered by Gemini AI" */}
              <div className="mt-4 text-center min-h-[20px]">
                <p className="text-xs font-medium text-gray-500 tracking-wider uppercase">
                  {formattedText && (
                    <>
                      {formattedText.prefix}
                      {formattedText.suffix && (
                        <span className="text-[#2b33ff] font-semibold">
                          {formattedText.suffix}
                        </span>
                      )}
                      <span className="inline-block w-0.5 h-3 bg-gray-500 ml-1 animate-pulse">|</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          }
          />
        </div>

        {/* 4. Activity Timeline */}
        <FeatureCard
          icon={<Clock className="w-4 h-4" />}
          title="Activity Timeline"
          description="Track your learning journey with a complete history of contexts created, flashcards added, and AI insights generated."
          visual={<TimelineActivity />}
        />
      </div>
    </section>
  );
}