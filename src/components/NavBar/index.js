"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-3 justify-center text-center px-3 py-2">
        <li
          className={`border border-gray-600 px-2 py-1 rounded w-[100%] ${
            pathname === "/" ? "active" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`border border-gray-600 px-2 py-1 rounded w-[100%] ${
            pathname === "/statistics" ? "active" : ""
          }`}
        >
          <Link href="/statistics">Statistics</Link>
        </li>
        <li
          className={`border border-gray-600 px-2 py-1 rounded w-[100%] ${
            pathname === "/contact" ? "active" : ""
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
