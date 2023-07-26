"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-3 justify-center text-center px-3 py-2">
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          className={`border border-gray-600 px-2 py-1 rounded w-[100%] ${
            pathname === "/" ? "active" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          className={`border border-gray-600 px-2 py-1 rounded w-[100%] ${
            pathname === "/statistics" ? "active" : ""
          }`}
        >
          <Link href="/statistics">Statistics</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          className={`border border-gray-600 px-2 py-1 rounded w-[100%] ${
            pathname === "/contact" ? "active" : ""
          }`}
        >
          <Link href="/contact">Contact</Link>
        </motion.li>
      </ul>
    </nav>
  );
}
