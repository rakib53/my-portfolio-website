import { NextResponse } from "next/server";

export async function middleware(request) {
  const protectedRoutes = ["/admin", "/dashboard", "/dashboard/add-project"];
  const url = request.nextUrl.clone();

  // Check if the requested route is protected
  if (protectedRoutes.includes(url.pathname)) {
    const token = request.cookies.get("access_token");

    if (!token) {
      // If no token, redirect to the signin page
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    // Token exists, allow access to the page
    return NextResponse.next();
  }

  return NextResponse.next(); // Allow non-protected routes
}
