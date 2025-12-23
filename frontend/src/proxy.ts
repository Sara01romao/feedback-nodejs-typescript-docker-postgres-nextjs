import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateToken } from "./lib/validate-token";

export async function proxy(request: NextRequest) {
  const token = await validateToken();
  const { pathname } = request.nextUrl;

  console.log("tokenssss 123", token.ok)

  if (!token.ok && pathname.startsWith("/dashboard")) {

    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token.ok && (pathname.startsWith("/login") || pathname === "/" || pathname.startsWith("/code-generator"))) {

    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/", "/code-generator"],
};
