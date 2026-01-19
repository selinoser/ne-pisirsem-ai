import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecipeClient from "@/components/RecipeClient";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFD] text-slate-900 font-sans selection:bg-emerald-100
  dark:bg-slate-950
  dark:text-slate-100
  dark:selection:bg-emerald-500/30">
      <Header />
      <main className="container mx-auto px-6 pt-16 flex-1">
        <Hero />
        <RecipeClient />
      </main>
      <Footer />
    </div>
  );
}
