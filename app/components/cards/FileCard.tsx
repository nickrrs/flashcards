"use client";

import { motion, Variants } from "motion/react";

interface FileCardProps {
  index: number;
  isOpen: boolean;
}

/**
 * Componente que representa um único "arquivo" ou "cartão" dentro da pasta
 */
export default function FileCard({ index, isOpen }: FileCardProps) {
  // Configurações de animação para cada cartão
  // O cartão do meio sobe reto, os laterais inclinam para criar o efeito de leque
  const variants = {
    closed: {
      y: 0,
      rotate: 0,
      scale: 0.8,
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    open: {
      y: -20, // O quanto o cartão sobe (ajustado para mobile)
      rotate: index === 0 ? -6 : index === 1 ? 6 : 0, // Ângulo ajustado para 2 arquivos
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.05 + index * 0.03, // Pequeno atraso entre cada cartão
      },
    },
  };

  return (
    <motion.div
      variants={variants as Variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      custom={index}
      className="absolute left-0 right-0 mx-auto w-9 h-12 md:w-12 md:h-16 bg-white rounded shadow-sm border border-gray-100 flex flex-col p-1 md:p-1.5 origin-bottom pointer-events-none"
      style={{
        zIndex: 10 - index, // Z-index para sobreposição
        bottom: "8px",
      }}
    >
      {/* Esqueleto do conteúdo do arquivo (linhas cinzas) */}
      <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-gray-100 mb-1 md:mb-1.5" />
      <div className="w-full h-0.5 md:h-1 bg-gray-100 rounded-full mb-0.5 md:mb-1" />
      <div className="w-3/4 h-0.5 md:h-1 bg-gray-100 rounded-full mb-0.5 md:mb-1" />
      <div className="w-full h-0.5 md:h-1 bg-gray-100 rounded-full mt-auto" />
    </motion.div>
  );
}
