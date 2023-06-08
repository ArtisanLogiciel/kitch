"use client"

import { useState } from 'react'

export function FavBtn() {
    const [isFav, setIsFav] = useState(false);

  return (
    <button
      className="flex flex-wrap items-center gap-4 bg-blue-600 font-bold text-white py-2 px-4 rounded-md cursor-pointer"
      onClick={() => setIsFav((prev) => !prev)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={isFav ? "red" : "white"}
        className="bi bi-heart-fill duration-200 ease-in-out"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
      Suivre
    </button>
  );
}
