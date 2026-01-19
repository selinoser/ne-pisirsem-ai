export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-xl border-t border-slate-200 sticky bottom-0 z-30  flex justify-between items-center dark:bg-slate-900/60   dark:border-slate-800">
      <div className="max-w-7xl mx-auto p-3 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <span className="text-slate-600 dark:text-white font-bold tracking-tighter">ne<span className="text-emerald-500">pişirsem</span>.ai</span>
          <span className="hidden md:block opacity-20">|</span>
          <p>© 2026</p>
        </div>
      </div>
    </footer>
  );
}