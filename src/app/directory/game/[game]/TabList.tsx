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
    { label: "Chaînes live", href: path_base, variant: "" },
    { label: "Vidéos", href: `${path_base}/videos/all`, variant: "/videos" },
    { label: "Clips", href: `${path_base}/clips`, variant: "/clips" },
  ];

  return (
    <nav className="text-lg">
      <ul className="flex flex-wrap gap-4 p-4 font-bold rounded-lg">
        {tabs.map((tab, index) => {
          const isPathName =
            tab.href === path_base
              ? pathname === path_base + tab.variant
              : pathname.startsWith(path_base + tab.variant);

          return (
            <li
              key={index}
              className={`${
                isPathName ? "text-blue-600 underline" : "text-current"
              } cursor-pointer`}
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
