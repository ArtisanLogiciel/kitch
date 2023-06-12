"use client"

import { usePathname, useRouter } from "next/navigation";

export default function Tablist({ id, game }: { id: string, game: string }) {
    const pathname = usePathname();
    const router = useRouter();

    const path_base = `/directory/game/${id}/${game}`;
    const tabs = [
        { label: "Live Channels", href: path_base },
        { label: "Videos", href: `${path_base}/videos/all` },
        { label: "Clips", href: `${path_base}/clips` },
    ]

  return (
    <nav className="text-lg">
      <ul className="flex flex-wrap gap-4 p-4 font-bold rounded-lg">
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              className={`${pathname === tab.href ? "text-blue-600 underline" : ""} cursor-pointer`}
              onClick={() => router.push(tab.href)}
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
