"use client";

import { X, Clock, ChefHat } from "lucide-react";
import Image from "next/image";

export default function RecipeModal({ recipe, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-full rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl dark:shadow-black/50 transition-all"
      >
        {/* Sol: Görsel */}
        <div className="relative w-full md:w-5/12 h-64 md:h-auto">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-500"
          />
          <button
            onClick={onClose}
            className="absolute top-6 left-6 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full md:hidden shadow hover:scale-110 transition-transform"
          >
            <X className="text-slate-900 dark:text-white" />
          </button>
        </div>

        {/* Sağ: İçerik */}
        <div className="w-full md:w-7/12 overflow-y-auto p-10 md:p-14 relative">
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full hidden md:block transition-colors"
          >
            <X className="text-slate-900 dark:text-white" />
          </button>

          <h2 className="text-4xl font-black mb-4 pr-10 text-slate-900 dark:text-white">
            {recipe.title}
          </h2>

          <div className="flex gap-6 text-sm uppercase tracking-widest mb-10 text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2 text-emerald-500">
              <Clock size={18} /> {recipe.time}
            </span>
            <span className="flex items-center gap-2">
              <ChefHat size={18} /> {recipe.difficulty}
            </span>
          </div>

          {/* Malzemeler */}
          <section className="mb-12">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-400 dark:text-slate-300">
              Malzemeler
            </h4>
            <ul className="grid sm:grid-cols-2 gap-4">
              {recipe.ingredients.map((ing, i) => (
                <li
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-slate-700 dark:text-slate-200"
                >
                  {ing}
                </li>
              ))}
            </ul>
          </section>

          {/* Hazırlanış */}
          <section>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-400 dark:text-slate-300">
              Hazırlanış
            </h4>
            <div className="space-y-6">
              {recipe.instructions.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-4xl font-black text-slate-200 dark:text-slate-500">
                    {i + 1}
                  </span>
                  <p className="pt-2 text-slate-700 dark:text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
