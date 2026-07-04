import { NextResponse } from "next/server";
import locationsData from "@/data/locations.json";

export async function POST(request) {
  try {
    const data = await request.json().catch(() => ({}));
    const id = (data.id || "").toString().trim();

    if (!id) {
      return NextResponse.json({ error: "Missing location ID / slug" }, { status: 400 });
    }

    const location = locationsData[id];

    if (!location) {
      return NextResponse.json({
        formattedAddress: "India",
        addressComponents: [
          { longText: "India", types: ["country"] }
        ]
      }, {
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59" }
      });
    }

    const city = (location.city || "").trim();
    const state = (location.state || "").trim();

    const details = {
      formattedAddress: `${city}, ${state}, India`,
      addressComponents: [
        { longText: city, types: ["locality"] },
        { longText: state, types: ["administrative_area_level_1"] }
      ]
    };

    return NextResponse.json(details, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600"
      }
    });
  } catch (error) {
    console.error("Details API error:", error);
    return NextResponse.json({ error: "Failed to fetch place details" }, { status: 500 });
  }
}
