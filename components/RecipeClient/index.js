"use client";
import { useState } from "react";
import RecipeCard from "../RecipeCard";
import RecipeModal from "../RecipeModal";
import { Plus, X, Loader2, Sparkles, MessageCircleWarningIcon } from 'lucide-react';
import { getRecipes } from "@/app/services/recipes";
import { getFoodImage } from "@/app/services/generateImage";

export default function RecipeClient() {
    const [ingredients, setIngredients] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");

    const addIngredient = () => {
        if (!inputValue.trim()) return;

        setIngredients([...ingredients, inputValue.trim()]);
        setInputValue("");
    };

    const handleGenerate = async () => {
        if (ingredients.length === 0) return;

        const currentIngredients = [...ingredients];
        setRecipes([]);
        setSelectedRecipe(null);
        setLoading(true);
        setError("");
        setIngredients([]);
        setInfo(`${currentIngredients.join(", ")}`);

        try {
            const recipes = await getRecipes(ingredients);

            const recipesWithImages = await Promise.all(
                recipes.map(async (recipe, index) => {
                    const image = await getFoodImage(recipe.imageQuery);
                    return {
                        ...recipe,
                        id: `${recipe.title}-${index}`,
                        image,
                    };
                })
            );

            setRecipes(recipesWithImages);
        } catch (err) {
            setError("Şu anda çok fazla istek alıyoruz. Lütfen biraz sonra tekrar deneyin.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="max-w-3xl mx-auto px-4 m text-center mb-16 space-y-6">
                <div className="relative group mt-10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-[2rem] blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
                    <div className="relative bg-white dark:bg-slate-900 p-3 rounded-[1.8rem] shadow-xl shadow-slate-200/50 dark:shadow-black/40 flex gap-2 border border-slate-100 dark:border-slate-800">
                        <input
                            className="flex-1 px-6 outline-none text-lg bg-transparent placeholder:text-slate-300 dark:placeholder:text-slate-500 font-medium text-slate-800 dark:text-slate-100"
                            placeholder="Dolapta ne var? (örn: Tavuk, Kuşkonmaz)"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addIngredient()}
                        />
                        <button
                            type="button"
                            onClick={addIngredient}
                            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-500 transition-all duration-300 active:scale-95 flex items-center gap-2"
                        >
                            <Plus size={20} strokeWidth={3} />
                            <span className="hidden sm:inline">Ekle</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-8 justify-center">
                    {ingredients.map((ing, i) => (
                        <span key={i} className="group bg-white dark:bg-slate-900
                 hover:bg-rose-50 dark:hover:bg-rose-950
                 text-slate-600 dark:text-slate-300
                 px-5 py-2.5 rounded-2xl font-semibold
                 border border-slate-200 dark:border-slate-700">
                            {ing}
                            <button onClick={() => setIngredients(ingredients.filter((_, idx) => idx !== i))}>
                                <X size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </span>
                    ))}
                </div>

                {ingredients.length > 0 && (
                    <div className="flex justify-center mb-24">
                        <button
                            onClick={handleGenerate}
                            disabled={loading}
                            className="group relative bg-slate-900 text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <span className="relative flex items-center justify-center gap-3">
                                {loading ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <Sparkles className="w-6 h-6 animate-pulse" />
                                )}
                                <span className="tracking-wide">ŞİMDİ OLUŞTUR</span>
                            </span>
                        </button>
                    </div>
                )}

                {error && (
                    <div className="mt-6 flex justify-center">
                        <div className="flex bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 px-6 py-4 rounded-2xl font-semibold border border-rose-200 dark:border-rose-900">
                            <MessageCircleWarningIcon className="mr-2"></MessageCircleWarningIcon> {error}
                        </div>
                    </div>
                )}

                {info && (
                    <div className="flex flex-col items-center text-center gap-4 mt-6">

                        {loading && (
                            <div className="max-w-xl p-4 rounded-xl bg-emerald-50 border border-emerald-100
                      dark:bg-emerald-950/30 dark:border-emerald-900/50">
                                <p className="text-sm leading-relaxed text-emerald-700 dark:text-emerald-300">
                                    <strong>Lütfen bekleyiniz...</strong><br />
                                    Yapay zekamız, verdiğiniz malzemelerle her seferinde
                                    <strong>6 özgün tarif</strong> oluşturur.
                                    Aynı malzemeler, her denemede yeni bir lezzet ✨
                                </p>
                            </div>
                        )}

                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Kullanılan malzemeler:
                            <span className="ml-1 text-emerald-500 font-medium">
                                {info}
                            </span>
                        </p>

                    </div>
                )}
            </div>

            <div className="mx-auto px-12 max-w-6xl mb-20">
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse">
                        {[1, 2, 3].map((n) => (
                            <div
                                key={n}
                                className="bg-slate-100 dark:bg-slate-800 rounded-[2em] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-slate-900/20 h-80 flex flex-col"
                            >
                                <div className="h-40 bg-slate-200 dark:bg-slate-700 w-full mb-4" />
                                <div className="p-6 flex-1 space-y-4">
                                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {recipes.map((r) => (
                            <RecipeCard key={r.id} recipe={r} onOpen={setSelectedRecipe} />
                        ))}
                    </div>
                )}
            </div>

            {selectedRecipe && (
                <RecipeModal
                    recipe={selectedRecipe}
                    onClose={() => setSelectedRecipe(null)}
                />
            )}
        </>
    );
}