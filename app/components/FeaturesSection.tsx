"use client";

import { FolderTree, Plus, Brain, Sparkles, Clock } from "lucide-react";
import FeatureCard from "./cards/FeatureCard";
import TimelineActivity from "./cards/TimelineActivity";
import CreateFlashcardDemo from "./cards/CreateFlashcardDemo";

export default function FeaturesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-[#2b33ff] mb-3 uppercase tracking-wide">
          powerful features
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          built for seamless memorization
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          organize, create, and learn with AI-powered insights. never forget what matters most.
        </p>
      </div>

      {/* Grid 2x2 */}
      <div className="relative grid px-8 w-full grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 lg:grid-cols-2">
        {/* 1. Organize by Context */}
        <FeatureCard
          icon={<FolderTree className="w-4 h-4" />}
          title="Organize by Context"
          description="Group your flashcards into contexts like 'Git Commands', 'Cooking Recipes', or any topic that makes sense for you."
          visual={
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-8 h-8 rounded bg-[#3590ff]/10 flex items-center justify-center">
                  <FolderTree className="w-4 h-4 text-[#2b33ff]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Git Commands</p>
                  <p className="text-xs text-gray-500">12 flashcards</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-8 h-8 rounded bg-[#3590ff]/10 flex items-center justify-center">
                  <FolderTree className="w-4 h-4 text-[#2b33ff]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Cooking</p>
                  <p className="text-xs text-gray-500">8 flashcards</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-400">Create new context</p>
                </div>
              </div>
            </div>
          }
        />

        {/* 2. Create Flashcards */}
        <CreateFlashcardDemo />

        {/* 3. AI Analysis */}
        <FeatureCard
          icon={<Brain className="w-4 h-4" />}
          title="AI-Powered Analysis"
          description="Get detailed explanations and insights powered by AI. Understand your flashcards better with intelligent analysis."
          visual={
            <div className="mt-6 h-full max-h-[260px] relative">
              <div className="p-5 bg-linear-to-br from-[#2b33ff] to-[#2a7ae6] rounded-xl text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5" />
                  <span className="text-sm font-semibold">AI Analysis</span>
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  Command used to add files to the staging area of Git. This prepares your changes to be committed in the next step.
                </p>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#2b33ff]" />
              </div>
            </div>
          }
        />

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