import { NextResponse } from "next/server";

const CITIES = [
  { id: "1", text: "Mumbai, Maharashtra, India" },
  { id: "2", text: "Pune, Maharashtra, India" },
  { id: "3", text: "Thane, Maharashtra, India" },
  { id: "4", text: "Navi Mumbai, Maharashtra, India" },
  { id: "5", text: "Delhi, India" },
  { id: "6", text: "Bangalore, Karnataka, India" },
  { id: "7", text: "Chennai, Tamil Nadu, India" },
  { id: "8", text: "Kolkata, West Bengal, India" },
  { id: "9", text: "Hyderabad, Telangana, India" },
  { id: "10", text: "Jaipur, Rajasthan, India" },
  { id: "11", text: "Ahmedabad, Gujarat, India" },
];

export async function POST(request) {
  try {
    const data = await request.json().catch(() => ({}));
    const q = (data.q || "").toLowerCase().trim();
    if (!q) {
      return NextResponse.json([]);
    }

    const filtered = CITIES.filter(c => c.text.toLowerCase().includes(q));
    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
