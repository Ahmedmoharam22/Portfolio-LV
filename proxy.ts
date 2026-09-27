import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

const PROTECTED_PREFIX = "/dashboard";
const LOGIN_PAGE = "/admin/login";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only run on dashboard routes
  if (!pathname.startsWith(PROTECTED_PREFIX)) {
    return NextResponse.next();
  }

  const token = request.cookies.get("portfolio_session")?.value;
  const session = await decrypt(token);

  if (!session || new Date(session.expiresAt) <= new Date()) {
    const loginUrl = new URL(LOGIN_PAGE, request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
