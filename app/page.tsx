import { redirect } from "next/navigation";

// Root page — always redirect to /en
// The proxy.ts middleware handles this at the edge,
// but this is a fallback in case middleware misses the root.
export default function RootPage() {
  redirect("/en");
}
