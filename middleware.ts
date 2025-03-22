import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname;

  // Check if user is logged in
  const sessionCookie = request.cookies.get("session")?.value;
  const isAuthenticated = !!sessionCookie;

  // Public paths that don't require authentication
  const isPublicPath =
    path === "/landing" || path === "/sign-in" || path === "/sign-up";

  // If user is not authenticated and trying to access a protected route
  if (!isAuthenticated && !isPublicPath && path !== "/") {
    return NextResponse.redirect(new URL("/landing", request.url));
  }

  // If user is not authenticated and at root, redirect to landing
  if (!isAuthenticated && path === "/") {
    return NextResponse.redirect(new URL("/landing", request.url));
  }

  // If user is authenticated and trying to access public routes
  if (isAuthenticated && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
