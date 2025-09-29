import { NextResponse } from "next/server";
// import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const Token = request.cookies.get("token")?.value;

  const user = Token && JSON.parse(Token);

  const LoggedInUserRestrictedPath = [
    "/login",
    "/register",
    "/forget-password",
  ].includes(request.nextUrl.pathname);

  // Redirect logic for users who are already logged in
  if (user && LoggedInUserRestrictedPath) {
    if (user.role === "admin") {
      return NextResponse.redirect(new URL("/admin_dashboard", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users trying to access restricted paths
  if (!user && !LoggedInUserRestrictedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Handling user roles for specific pages
  if (user) {
    // if (user.role === "admin" && request.nextUrl.pathname === "/") {
    //   return NextResponse.redirect(new URL("/admin_dashboard", request.url));
    // }
    if (
      user.role === "user" &&
      request.nextUrl.pathname === "/admin_dashboard"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Continue with the response if none of the conditions above are met
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/player",
    // "/reset-password",
    "/TournamentOverview",
    "/profile/profile",
    "/profile/activation",
    "/profile/gallery",
    "/profile/multiplayer-game",
    "/admin_dashboard",
  ],
};
