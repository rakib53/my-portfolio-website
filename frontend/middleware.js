import { NextResponse } from "next/server";

export async function middleware(request) {
  // Protected routes
  const protectedRoutes = ["/admin", "/dashboard", "/dashboard/add-project"];
  const url = request.nextUrl.clone();

  if (protectedRoutes.includes(url.pathname)) {
    const token = request.cookies.get("access_token");

    if (!token) {
      // Not authenticated, redirect to login
      return NextResponse.redirect(new URL("/authentication", request.url));
    } else {
      // Validate token on the server-side
      try {
        const response = await fetch(
          `${process.env.PRODUCTION_API}/validate-user`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              token: token.value,
            },
            credentials: "include", // Include cookies for cross-site requests (if applicable)
          }
        );
        const userData = await response.json();
        if (userData?.user?._id) {
          // Allow access for protected routes
          return NextResponse.next();
        } else {
          return NextResponse.redirect(new URL("/authentication", request.url));
        }
      } catch (error) {
        return NextResponse.redirect(new URL("/authentication", request.url));
      }
    }
  }
  return NextResponse.next(); // Allow access for non-protected routes
}
