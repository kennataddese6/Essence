"use client";
import { usePathname } from "next/navigation";
export default function DasboardHeader() {
  const pathname = usePathname();
  return (
    <h1 className="font-bold text-2xl py-2 px-4">
      {pathname.charAt(1).toUpperCase() + pathname.slice(2)}
    </h1>
  );
}
