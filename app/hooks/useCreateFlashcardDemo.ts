import { useTypewriter } from "@/app/hooks/useTypewriter";

interface UseCreateFlashcardDemoOptions {
  title?: string;
  description?: string;
  titleSpeed?: number;
  descriptionSpeed?: number;
  eraseSpeed?: number;
}

export function useCreateFlashcardDemo(options?: UseCreateFlashcardDemoOptions) {
  const {
    title = "add all files to the staging area of Git",
    description = "git add .",
    titleSpeed = 5,
    descriptionSpeed = 10,
    eraseSpeed = 20,
  } = options || {};

  const { titleText, descriptionText, containerRef } = useTypewriter({
    title,
    description,
    titleSpeed,
    descriptionSpeed,
    eraseSpeed,
  });

  return {
    titleText,
    descriptionText,
    containerRef,
  };
}
