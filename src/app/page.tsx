"use client";

import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

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
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          style={{ width: "100%", height: "100%" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {/* @ts-expect-error Async Server Component */}
          <LiveCarousel />
        </Swiper>
      </div>

      {/* @ts-expect-error Async Server Component */}
      <LiveChannels />

      {/* @ts-expect-error Async Server Component */}
      <Categories />
    </div>
  );
}
