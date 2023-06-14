"use client";

import Image from "next/image";
import React from "react";
import { Swiper, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";
import { getImageSized } from "@/utils/getImageSized";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export async function LiveCarousel() {
  const [liveCarousel, setLiveCarousel] = React.useState<API<API_STREAMS[]>>(null);
  React.useEffect(() => {
   /*async function fetchData() {
      try {
        const data  = await getStreams();
        if (data) {
          setLiveCarousel(data.splice(-10, 7));
        }
      } catch (error) {
        console.log(error);
      }
    }
    // getStreams().then(data => {setLiveCarousel(data)
    // console.log(liveCarousel)}).catch(error => console.log(error))

    fetchData();
  }, []);

  return (
    <div className='w-full mb-10 h-[350px]'>
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop
    pagination={{
      clickable: true,
    }}
    style={{ width: "100%", height: "100%" }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    {!liveCarousel ? null : liveCarousel.map((element, index) => (  
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="w-full h-[300px] grid grid-cols-[12%_77%_11%]">
              <div
                className='w-full flex items-center justify-start'
              >
                <SwiperButtonPrev>
                  <ArrowBackIosNewIcon />
                </SwiperButtonPrev>
              </div>
              <div className="className='w-full h-[300px] grid grid-cols-[75%_25%]">
                 <ReactPlayer
                  url={`https://www.twitch.tv/${element.user_name}`}
                  className="react-player"
                  controls
                  width={"100%"}
                  height={"100%"}
                /> 

                <div className="w-full h-full bg-[white] flex flex-col justify-center items-center">
                  <div className="w-full grid grid-cols-[40%_60%]">
                    <div className="w-full flex items-center justify-center"
                    >
                      <Image
                        src={getImageSized(element?.thumbnail_url, "50", "50")}
                        alt="logo"
                        width={240}
                        height={280}
                        className='rounded-full w-[50px] h-[50px]'
                      />
                    </div>
                    <div className='w-full flex items-start justify-start flex-col'>
                      <p className='text-[#5C16C5]'>{element?.user_name}</p>
                      <p className='text-[#5C16C5] font-[200] text-[12px]'>
                        {element.game_name}
                      </p>
                      <p className='text-[12px]'>
                        {element?.viewer_count <= 1000
                          ? element.viewer_count
                          : getNumber_K_Mode(element.viewer_count)}{" "}
                        <span>spectateurs</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-start flex-wrap items-center flex-row mt-3">
                    {element?.tags.map((tag, index) => (
                      <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>
                          {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='w-full flex items-center justify-end'>
                <SwiperButtonNext>
                  <ArrowForwardIosIcon />
                </SwiperButtonNext>
              </div>
            </div>
          </SwiperSlide>
        ))}
          </Swiper>
          </div>
      )
}

const SwiperButtonNext = ({ children }: { children: any }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrev = ({ children }: { children: any }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};