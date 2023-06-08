"use client"

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

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
    <nav className=" text-xl">
      <ul className="flex flex-wrap gap-4 bg-gray-200 p-4 font-bold rounded-lg">
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              className={`${pathname.startsWith(tab.href) ? "text-blue-600 underline" : ""} cursor-pointer`}
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
