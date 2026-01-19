import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_TOKEN);

export async function getRecipes(ingredients) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Aşağıdaki malzemeleri kullanarak 6 farklı yemek tarifi üret: ${ingredients.join(", ")}. 
    Sadece JSON formatında cevap ver. Markdown kod blokları ('''json gibi) kullanma. 
    Format:
    [
      {
        "title": "Yemek Adı",
        "time": "30 dk",
        "difficulty": "Kolay",
        "ingredients": ["malzeme 1"],
        "instructions": ["adım 1"],
        "imageQuery": "grilled salmon"
      }
    ]`;

    const result = await model.generateContent([prompt]);
    const response = await result.response;
    const text = response.text();

    const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const recipes = JSON.parse(cleanJson);

    return recipes.map((recipe, index) => ({
      ...recipe,
      id: `${recipe.title}-${index}`,
    }));
  } catch (error) {
    console.error("API Hatası:", error);
    
  }
}
