import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-30 px-6 py-4 flex justify-between items-center dark:bg-slate-900/60
  dark:border-slate-800">
      <div className="flex items-center gap-2.5 group cursor-pointer">
        <div className="bg-gradient-to-tr from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-600  rounded-2xl text-white shadow-xl shadow-emerald-300/40 dark:shadow-emerald-900/60 ring-1 ring-white/20 dark:ring-white/10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ease-out">
          <img src="/logo.png" alt="Logo" width={50} height={50} className="rounded-2xl"></img>
        </div>
        <span className="text-2xl font-black tracking-tighter italic text-slate-600 dark:text-slate-300">
          Ne <span className="text-emerald-500">Pişirsem?</span>
        </span>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}