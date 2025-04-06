// app/api/forecast/route.js

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return new Response(JSON.stringify({ message: "City is required" }), {
      status: 400,
    });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify(data), { status: res.status });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch forecast data" }),
      { status: 500 }
    );
  }
}
