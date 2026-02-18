import { useState, useEffect, useRef } from "react";
import { useGroupHoverOrInView } from "@/app/hooks/useGroupHoverOrInView";

export interface TimelineActivity {
  type: 'context' | 'flashcard' | 'insight';
  text: string;
  time?: string;
}

export interface TimelineGroup {
  date: string;
  activities: TimelineActivity[];
}

const timelineData: TimelineGroup[] = [
  {
    date: 'Today',
    activities: [
      { type: 'context', text: 'Created context "Git Commands"' },
      { type: 'flashcard', text: 'Added flashcard "git add"' },
      { type: 'insight', text: 'Generated AI insight for "git add"' },
    ]
  },
  {
    date: 'Yesterday',
    activities: [
      { type: 'context', text: 'Created context "Cooking"' },
      { type: 'flashcard', text: 'Added flashcard "chicken recipe"' },
      { type: 'insight', text: 'Generated AI insight for recipe' },
    ]
  },
  {
    date: 'Feb 8, 2026',
    activities: [
      { type: 'flashcard', text: 'Added flashcard "git commit"' },
      { type: 'insight', text: 'Generated AI insight for commit' },
    ]
  }
];

export function useTimelineActivity() {
  const { isHovered, elementRef } = useGroupHoverOrInView();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [todayItemsVisible, setTodayItemsVisible] = useState(0);

  // Pegar apenas os eventos de "Today"
  const todayGroup = timelineData.find(group => group.date === 'Today');
  const todayItems = todayGroup?.activities || [];
  const totalTodayItems = todayItems.length;

  // Animação de adicionar itens de hoje progressivamente
  useEffect(() => {
    if (!isHovered) {
      // Resetar quando o hover sai - voltar ao estado vazio
      setTodayItemsVisible(0);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
      return;
    }
    
    // Garantir scroll inicial no topo quando começa o hover
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    // Adicionar itens de hoje progressivamente
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < totalTodayItems) {
        currentIndex++;
        setTodayItemsVisible(currentIndex);
        
        // Manter scroll no topo enquanto novos itens são adicionados
        // Usar requestAnimationFrame duplo para garantir que o DOM foi atualizado
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }
          });
        });
      } else {
        clearInterval(interval);
      }
    }, 400); // Adiciona um item a cada 400ms

    return () => clearInterval(interval);
  }, [isHovered, totalTodayItems]);

  // Preparar grupos para renderização - apenas Today quando houver itens visíveis
  const getVisibleGroups = (): TimelineGroup[] => {
    const groups: TimelineGroup[] = [];
    
    // Adicionar Today apenas se houver itens visíveis
    if (todayGroup && todayItemsVisible > 0) {
      groups.push({
        date: todayGroup.date,
        activities: todayGroup.activities.slice(0, todayItemsVisible)
      });
    }
    
    return groups;
  };

  const visibleGroups = getVisibleGroups();

  return {
    isHovered,
    elementRef,
    scrollContainerRef,
    visibleGroups,
    todayItemsVisible,
  };
}

export { timelineData };
