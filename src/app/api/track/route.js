import { NextResponse } from "next/server";

// Dynamic tracking simulated database.
// In production, you would connect to:
// 1. A REST API (e.g. fetch("https://api.logistics.com/v1/shipments/" + id))
// 2. A SQL/NoSQL Database (e.g. pgClient.query("SELECT * FROM shipments WHERE id = $1", [id]))
// 3. A CMS or ERP endpoint.
const MOCK_TRACKING_DB = {
  "DEMO": {
    id: "DEMO",
    origin: "Mumbai, Maharashtra",
    destination: "Bangalore, Karnataka",
    status: "In Transit",
    percentage: 65,
    lastLocation: "Hub Depot - Pune, MH",
    eta: "2026-07-02"
  },
  "MARUTITRANS10024": {
    id: "MARUTITRANS10024",
    origin: "Delhi, Delhi",
    destination: "Hyderabad, Telangana",
    status: "In Transit",
    percentage: 45,
    lastLocation: "Transit Hub - Nagpur, MH",
    eta: "2026-07-06"
  },
  "DELIVERED": {
    id: "DELIVERED",
    origin: "Pune, Maharashtra",
    destination: "Mumbai, Maharashtra",
    status: "Delivered",
    percentage: 100,
    lastLocation: "Recipient Address - Koparkhairne",
    eta: "Delivered on 2026-06-28"
  }
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const rawId = searchParams.get("id") || "";

    // Security check: Sanitize input by stripping non-alphanumeric characters, spaces, and hyphens
    const trackingId = rawId.replace(/[^a-zA-Z0-9-\s]/g, "").trim().toUpperCase();

    if (!trackingId) {
      return NextResponse.json({ error: "Tracking ID is required." }, { status: 400 });
    }

    // Connect to your ERP/Database here:
    // const result = await fetchRealShipmentFromERP(trackingId);
    
    // Simulating database lookup:
    const shipment = MOCK_TRACKING_DB[trackingId];

    if (!shipment) {
      return NextResponse.json(
        { error: `Consignment with ID "${trackingId}" was not found.` },
        { status: 404 }
      );
    }

    // Return the response without caching since shipment statuses change dynamically
    return NextResponse.json(shipment, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  } catch (error) {
    console.error("Tracking API error:", error);
    // Generic error returned to client to avoid leaking system stack traces
    return NextResponse.json({ error: "Failed to query consignment details." }, { status: 500 });
  }
}
