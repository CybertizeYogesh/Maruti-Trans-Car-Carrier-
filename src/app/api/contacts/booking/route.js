import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Read body content (which can be form-urlencoded or json)
    const contentType = request.headers.get("content-type") || "";
    let body = {};
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await request.text();
      const params = new URLSearchParams(text);
      for (const [key, val] of params.entries()) {
        body[key] = val;
      }
    } else {
      body = await request.json().catch(() => ({}));
    }

    console.log("Booking Request Received:", body);

    // Return success code '1' exactly as in the live website
    return new NextResponse("1", {
      headers: { "Content-Type": "text/plain" }
    });
  } catch (error) {
    return new NextResponse("0", {
      status: 500,
      headers: { "Content-Type": "text/plain" }
    });
  }
}
