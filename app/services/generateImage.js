export async function getFoodImage(query) {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query + " food"
      )}&per_page=1`,
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_TOKEN,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data.photos?.[0]?.src?.large || "/placeholder.png";
  } catch (err) {
    console.error("Pexels image error:", err);
    return "/placeholder.png";
  }
}