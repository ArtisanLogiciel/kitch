import React from "react";
import Image from "next/image";
export default function NavBar() {
  return (
    <div>
      <Image
        className=""
        src="/logo.png"
        alt="Logo"
        width={45}
        height={9}
        priority
      />
    </div>
  );
}
