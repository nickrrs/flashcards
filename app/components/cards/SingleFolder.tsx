"use client";

import { motion } from "motion/react";
import FileCard from "./FileCard";

interface SingleFolderProps {
  isOpen: boolean;
  fileCount?: number;
}

/**
 * Componente de uma única pasta com seus arquivos
 */
export default function SingleFolder({ isOpen, fileCount = 2 }: SingleFolderProps) {
  return (
    <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-end justify-center">
      {/* PARTE DE TRÁS DA PASTA */}
      <div className="absolute bottom-0 w-14 h-12 md:w-20 md:h-16 bg-gray-200 rounded-lg shadow-lg z-0" />

      {/* OS ARQUIVOS */}
      <div className="absolute bottom-0 w-full flex justify-center z-10 ">
        {Array.from({ length: fileCount }).map((_, i) => (
          <FileCard key={i} index={i} isOpen={isOpen} />
        ))}
      </div>

      {/* PARTE DA FRENTE DA PASTA */}
      <motion.div
        className="relative z-20 w-14 h-12 md:w-20 md:h-16 bg-linear-to-b from-gray-100 to-gray-200 rounded-lg shadow-xl overflow-hidden border border-gray-300/50"
        animate={{
          rotateX: isOpen ? 15 : 0,
          scale: isOpen ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformOrigin: "bottom" }}
      >
        {/* Detalhe de brilho/reflexo */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/50" />

        {/* Ícone ou detalhe na frente da pasta */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 w-7 h-4 md:w-10 md:h-6 bg-white/40 rounded backdrop-blur-sm border border-gray-300/30" />

        {/* Sombra interna */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-400/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Sombra no chão */}
      <motion.div
        className="absolute -bottom-4 w-14 md:w-20 h-2 bg-gray-400/20 rounded-[100%] blur-sm z-[-1]"
        animate={{
          opacity: isOpen ? 0.4 : 0.2,
          scale: isOpen ? 1.1 : 1,
        }}
      />
    </div>
  );
}
