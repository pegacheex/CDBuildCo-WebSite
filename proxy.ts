import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Redirect root to locale
    "/",
    // Match locale-prefixed paths
    "/(en|mr|hi)/:path*",
    // Match all other paths (excluding internals and static files)
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
