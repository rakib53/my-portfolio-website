// app/api/validate-token/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.cookies.get("access_token");

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_PRODUCTION_API
          : process.env.NEXT_PUBLIC_LOCALHOST_API
      }/user-info`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          cookie: `access_token=${token.value}`,
        },
        credentials: "include",
      }
    );

    const userData = await response.json();

    if (response.ok) {
      return NextResponse.json(userData?.data, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
