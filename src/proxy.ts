import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 🔐 Auth Routes
 */
const authRoutes = [
  "/auth/login",
  "/auth/signup",
  "/auth/verify-otp",
  "/auth/set-password",
  "/auth/forget-password",
  "/auth/choose-role",
];

/**
 * 🔒 Private Routes
 */
const privateRoutes = [
  // "/agency-profile",
  // "/agent-enquiries",
  // "/my-listing",
  // "/overview",
  // "/security",
  // "/subscription",

  // "/enquiries",
  // "/password-security",
  // "/profile",
  // "/save-properties",
  // "/saved-search",
  // "/settings",
  "/terms-conditions",
  // "/user-notifications",
];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;

  const isAuthRoute = authRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  /**
   * ❌ Not logged in → block private routes
   */
  if (!accessToken && isPrivateRoute) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  /**
   * ✅ Logged in → block auth routes
   */
  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/overview", request.url));
  }

  /**
   * ✅ Continue request + attach header
   */
  const response = NextResponse.next();
  response.headers.set("x-search", search);

  return response;
}