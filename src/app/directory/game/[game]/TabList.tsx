"use client"

import { usePathname, useRouter } from "next/navigation";

type TabListProps = {
  game: string;
};

export default function Tablist({ game }: TabListProps) {
  const pathname = usePathname();
  const router = useRouter();

  const path_base = `/directory/game/${game}`;
  const tabs = [
    { label: "Chaînes live", href: path_base },
    { label: "Vidéos", href: `${path_base}/videos/all` },
    { label: "Clips", href: `${path_base}/clips` },
  ];

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
