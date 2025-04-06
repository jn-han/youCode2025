export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const rawCity = searchParams.get("city");
  const city = rawCity?.split(",")[0];

  console.log("🔍 City received:", city);

  if (!city) {
    return new Response(JSON.stringify({ message: "City is required" }), {
      status: 400,
    });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log("🔑 Using API key:", apiKey);

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&appid=${apiKey}`;

    console.log("🌐 Fetching:", url);

    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify(data), { status: res.status });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Weather API Error:", err);
    return new Response(
      JSON.stringify({ message: "Failed to fetch weather data" }),
      { status: 500 }
    );
  }
}
