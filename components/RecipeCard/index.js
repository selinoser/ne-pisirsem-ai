"use client";

import Image from "next/image";
import { Clock, ChefHat, ChevronRight } from "lucide-react";

export default function RecipeCard({ recipe, onOpen }) {
  return (
    <div
      onClick={() => onOpen(recipe)}
      className="
        bg-white dark:bg-slate-900
        rounded-[2rem] overflow-hidden
        border border-slate-100 dark:border-slate-800
        shadow-sm dark:shadow-black/40
        hover:shadow-2xl hover:-translate-y-2
        transition-all duration-500
        group cursor-pointer
      "
    >
      <div className="relative h-64 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div
          className="
            absolute inset-0 z-10
            bg-gradient-to-t from-black/60 via-transparent to-transparent
            opacity-60 group-hover:opacity-80 transition-opacity
          "
        />

        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-5 right-5 z-20">
          <div
            className="
              bg-white/90 dark:bg-slate-900/90
              backdrop-blur px-4 py-2 rounded-2xl
              text-[10px] font-black uppercase tracking-widest
              flex items-center gap-2
              shadow-xl dark:shadow-black/60
            "
          >
            <Clock size={12} className="text-emerald-500" />
            {recipe.time}
          </div>
        </div>
      </div>

      {/* İçerik */}
      <div className="p-8 space-y-4">
        <h3
          className="
            text-2xl font-bold leading-tight
            text-slate-800 dark:text-slate-100
            group-hover:text-emerald-600 transition-colors
          "
        >
          {recipe.title}
        </h3>

        <div
          className="
            flex items-center gap-4
            text-slate-400 dark:text-slate-500
            font-bold text-xs uppercase tracking-widest
          "
        >
          <span className="flex items-center gap-1.5">
            <ChefHat size={14} />
            {recipe.difficulty}
          </span>
        </div>

        <div
          className="
            pt-4 flex items-center
            text-emerald-500 font-bold
            group-hover:gap-3 transition-all
          "
        >
          <span>Tarifi İncele</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}