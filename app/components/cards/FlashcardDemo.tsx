"use client";

import { useState } from "react";
import { Brain, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface Flashcard {
  title?: string;
  description: string;
  context: string;
  aiAnalysis?: string;
}

const demoFlashcards: Flashcard[] = [
  {
    title: "git add",
    description: "git add",
    context: "Git Commands",
    aiAnalysis: "command used to add files to the staging area of Git"
  },
  {
    title: "chicken recipe",
    description: "chicken cooked for 20 minutes, with spices salt, paprika, lemon pepper",
    context: "cooking",
    aiAnalysis: "simple chicken recipe with basic spices"
  }
];

export default function FlashcardDemo() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = demoFlashcards[currentCard];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % demoFlashcards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev - 1 + demoFlashcards.length) % demoFlashcards.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative perspective-1000">
        <div
          className={`relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d cursor-pointer hover:scale-105 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={handleFlip}
        >
          {/* Frente do Card */}
          <div className="absolute inset-0 backface-hidden bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-xl border-2 border-gray-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#3590ff]"></div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {card.context}
                </span>
              </div>
              {card.title && (
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
              )}
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Sparkles className="w-4 h-4" />
                <span>click to see AI analysis</span>
              </div>
              <Brain className="w-5 h-5 text-[#3590ff]" />
            </div>
          </div>

          {/* Verso do Card (Análise IA) */}
          <div className="absolute inset-0 backface-hidden bg-linear-to-br from-[#3590ff] to-[#2a7ae6] rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-white" style={{ transform: 'rotateY(180deg)' }}>
            <Brain className="w-12 h-12 mb-4 opacity-80" />
            <div className="text-center">
              <p className="text-sm font-medium mb-2 opacity-90">AI analysis</p>
              <p className="text-base leading-relaxed">
                {card.aiAnalysis}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={handlePrevious}
          className="p-3 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 hover:border-white/40 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5 text-gray-900" />
        </button>
        
        <div className="flex gap-2 items-center">
          {demoFlashcards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentCard(index);
                setIsFlipped(false);
              }}
              className={`rounded-full transition-all ${
                index === currentCard
                  ? "bg-[#3590ff] w-8 h-2"
                  : "bg-gray-300/50 hover:bg-gray-400/50 w-2 h-2 backdrop-blur-sm"
              }`}
              aria-label={`Card ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 hover:border-white/40 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Next card"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
