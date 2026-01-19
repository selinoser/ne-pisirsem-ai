export default function Hero() {
    return (
        <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-slate-800 dark:text-slate-100">
                Malzemeler senin,  <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300">
                    tarifler bizim.
                </span>
            </h2>
            <p className="text-md md:text-lg font-medium max-w-xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
                Yapay zeka asistanın, elindeki kısıtlı malzemelerle bile sana gurme deneyimler sunmaya hazır.
            </p>
        </div>
    );
}
