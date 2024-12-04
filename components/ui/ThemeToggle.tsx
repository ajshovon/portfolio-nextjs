"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { LuSunMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <LuSunMoon />;

  if (resolvedTheme === "dark") {
    return (
      <FiSun onClick={() => setTheme("light")} className="cursor-pointer" />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon onClick={() => setTheme("dark")} className="cursor-pointer" />
    );
  }
}
