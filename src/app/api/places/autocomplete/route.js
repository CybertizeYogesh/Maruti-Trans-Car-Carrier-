import { NextResponse } from "next/server";
import locationsData from "@/data/locations.json";

// Node.js caches modules, so locationsList is parsed and loaded once in memory when the server starts.
const locationsList = Object.keys(locationsData).map(slug => {
  const item = locationsData[slug];
  const city = (item.city || "").trim();
  const state = (item.state || "").trim();
  return {
    id: slug,
    city,
    state,
    formatted: `${city}, ${state}, India`,
    lowerCity: city.toLowerCase(),
    lowerState: state.toLowerCase(),
    lowerFormatted: `${city.toLowerCase()}, ${state.toLowerCase()}, india`
  };
});

export async function POST(request) {
  try {
    const data = await request.json().catch(() => ({}));
    const q = (data.q || "").toLowerCase().trim();

    if (!q) {
      return NextResponse.json([], {
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59" }
      });
    }

    // Prioritize prefix matches, then substring matches
    const prefixMatches = [];
    const containsMatches = [];

    for (const loc of locationsList) {
      if (loc.lowerCity.startsWith(q)) {
        prefixMatches.push(loc);
      } else if (loc.lowerFormatted.includes(q)) {
        containsMatches.push(loc);
      }
    }

    // Sort alphabetically within categories to ensure consistent, clean ranking
    prefixMatches.sort((a, b) => a.city.localeCompare(b.city));
    containsMatches.sort((a, b) => a.city.localeCompare(b.city));

    const combined = [...prefixMatches, ...containsMatches];

    // Deduplicate and limit to top 10 unique suggestions
    const seen = new Set();
    const suggestions = [];

    for (const loc of combined) {
      if (!seen.has(loc.formatted)) {
        seen.add(loc.formatted);
        suggestions.push({
          id: loc.id,
          text: loc.formatted
        });
      }
      if (suggestions.length >= 10) {
        break;
      }
    }

    return NextResponse.json(suggestions, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600"
      }
    });
  } catch (error) {
    console.error("Autocomplete API error:", error);
    return NextResponse.json({ error: "Failed to fetch autocomplete suggestions" }, { status: 500 });
  }
}
