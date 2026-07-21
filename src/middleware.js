import { NextResponse } from "next/server";

export function middleware(request) {
  const token =
    request.cookies.get("token")?.value ||
    request.cookies.get("isLoggedIn")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/user/:path*",
};
