import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// next-intl navigation helpers — locale-aware Link, useRouter, usePathname, redirect
export const { Link, useRouter, usePathname, redirect } = createNavigation(routing);
