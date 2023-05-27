"use client";

import Image from "next/image";
import React from "react";

import { SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImageSized, SwiperButtonNext, SwiperButtonPrev } from "./UsefulsComponents";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export async function LiveCarousel() {
  const [liveCarousel, setLiveCarousel] = React.useState<API<API_STREAMS[]>>(null);
  console.log("liveCarousel", liveCarousel);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setLiveCarousel(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return liveCarousel
    ? liveCarousel.map((element, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="GridGlobaleHomeSlide">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <SwiperButtonPrev>
                  <ArrowBackIosNewIcon />
                </SwiperButtonPrev>
              </div>
              <div className="GridSlide">
                {/* <ReactPlayer
                  url={`https://www.twitch.tv/${element.user_name}`}
                  className="react-player"
                  controls
                  width={"100%"}
                  height={"100%"}
                /> */}

                <div className="InfosVideosSlide">
                  <div className="StyleInfosSlide">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={ImageSized(element?.thumbnail_url, "126", "94")}
                        alt="logo"
                        width={240}
                        height={280}
                        style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <p style={{ color: "#5C16C5" }}>{element.user_name}</p>
                      <p style={{ color: "#5C16C5", fontWeight: "200", fontSize: "12px" }}>
                        {element.game_name}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        {element?.viewer_count <= 1000
                          ? element.viewer_count
                          : element.viewer_count}{" "}
                        <span>spectateurs</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-start flex-wrap items-center flex-row mt-3">
                    {element?.tags.map((tag, index) => (
                      <div className="StyleTags" key={index}>
                        <p style={{ color: "#53535F", fontSize: "12px", padding: "20%" }}>{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <SwiperButtonNext>
                  <ArrowForwardIosIcon />
                </SwiperButtonNext>
              </div>
            </div>
          </SwiperSlide>
        );
      })
    : null;
}
