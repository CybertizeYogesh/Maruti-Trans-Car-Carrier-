import { NextResponse } from "next/server";

const CITY_DETAILS = {
  "1": {
    formattedAddress: "Mumbai, Maharashtra, India",
    addressComponents: [
      { longText: "Mumbai", types: ["locality"] },
      { longText: "Maharashtra", types: ["administrative_area_level_1"] }
    ]
  },
  "2": {
    formattedAddress: "Pune, Maharashtra, India",
    addressComponents: [
      { longText: "Pune", types: ["locality"] },
      { longText: "Maharashtra", types: ["administrative_area_level_1"] }
    ]
  },
  "3": {
    formattedAddress: "Thane, Maharashtra, India",
    addressComponents: [
      { longText: "Thane", types: ["locality"] },
      { longText: "Maharashtra", types: ["administrative_area_level_1"] }
    ]
  },
  "4": {
    formattedAddress: "Navi Mumbai, Maharashtra, India",
    addressComponents: [
      { longText: "Navi Mumbai", types: ["locality"] },
      { longText: "Maharashtra", types: ["administrative_area_level_1"] }
    ]
  },
  "5": {
    formattedAddress: "Delhi, India",
    addressComponents: [
      { longText: "Delhi", types: ["locality"] },
      { longText: "Delhi", types: ["administrative_area_level_1"] }
    ]
  },
  "6": {
    formattedAddress: "Bangalore, Karnataka, India",
    addressComponents: [
      { longText: "Bangalore", types: ["locality"] },
      { longText: "Karnataka", types: ["administrative_area_level_1"] }
    ]
  },
  "7": {
    formattedAddress: "Chennai, Tamil Nadu, India",
    addressComponents: [
      { longText: "Chennai", types: ["locality"] },
      { longText: "Tamil Nadu", types: ["administrative_area_level_1"] }
    ]
  },
  "8": {
    formattedAddress: "Kolkata, West Bengal, India",
    addressComponents: [
      { longText: "Kolkata", types: ["locality"] },
      { longText: "West Bengal", types: ["administrative_area_level_1"] }
    ]
  },
  "9": {
    formattedAddress: "Hyderabad, Telangana, India",
    addressComponents: [
      { longText: "Hyderabad", types: ["locality"] },
      { longText: "Telangana", types: ["administrative_area_level_1"] }
    ]
  },
  "10": {
    formattedAddress: "Jaipur, Rajasthan, India",
    addressComponents: [
      { longText: "Jaipur", types: ["locality"] },
      { longText: "Rajasthan", types: ["administrative_area_level_1"] }
    ]
  },
  "11": {
    formattedAddress: "Ahmedabad, Gujarat, India",
    addressComponents: [
      { longText: "Ahmedabad", types: ["locality"] },
      { longText: "Gujarat", types: ["administrative_area_level_1"] }
    ]
  }
};

export async function POST(request) {
  try {
    const data = await request.json().catch(() => ({}));
    const id = (data.id || "").toString();
    const details = CITY_DETAILS[id] || {
      formattedAddress: "India",
      addressComponents: [
        { longText: "India", types: ["country"] }
      ]
    };
    return NextResponse.json(details);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
