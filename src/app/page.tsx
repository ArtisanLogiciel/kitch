"use client";


// Components
import { LiveCarousel } from "../Components/LiveCarousel";
import { LiveChannels } from "../Components/LiveChannels";
import { Categories } from "../Components/Categories";

export default function Homepage() {
  return (
    <div className="ContenuPrincipale">
      <div
        className="w-full border-solid border-red-500 border-2 mb-10"
        style={{ height: "350px" }}
      >
        
          {/* @ts-expect-error Async Server Component */}
          <LiveCarousel />
        
      </div>

      {/* @ts-expect-error Async Server Component */}
      <LiveChannels />

      {/* @ts-expect-error Async Server Component */}
      <Categories />
    </div>
  );
}
