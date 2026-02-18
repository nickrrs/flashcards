import { useTypewriterText } from "@/app/hooks/useTypewriterText";

const PREFIX_TEXT = "Powered by ";
const SUFFIX_TEXT = "gemini AI";

export function useAIAnalysisCard() {
  const { displayText, containerRef } = useTypewriterText({
    text: `${PREFIX_TEXT}${SUFFIX_TEXT}`,
    speed: 40,
    eraseSpeed: 20,
  });

  const getFormattedText = () => {
    if (!displayText) return null;

    // Se o texto ainda não chegou ao prefixo completo, mostra apenas o que foi digitado
    if (displayText.length <= PREFIX_TEXT.length) {
      return {
        prefix: displayText,
        suffix: "",
      };
    }

    // Separa o prefixo do sufixo
    return {
      prefix: PREFIX_TEXT,
      suffix: displayText.substring(PREFIX_TEXT.length),
    };
  };

  return {
    formattedText: getFormattedText(),
    containerRef,
  };
}
