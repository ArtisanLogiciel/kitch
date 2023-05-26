import React from "react";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="flex bold text-2xl">
      <div className="w-1/5 flex">
        <Image
          className="m-2"
          src="/logo.png"
          alt="Logo"
          width={45}
          height={9}
          priority
        />
        Parcourir
      </div>
      <input
        className="bg-transparent border border-gray-50 rounded-sm"
        type="text"
      />
    </div>
  );
}
