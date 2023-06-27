"use client";

import Image from "next/image";
import * as React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";
import { getImageSized } from "@/utils/getImageSized";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
type ChildrenProps = {
  children: any,
  curr: number,
}

export function LiveCarousel() {
  const [liveCarousel, setLiveCarousel] = React.useState<API<API_STREAMS[]>>(null);
  const [curr, setCurr] = React.useState(0)
  //slides.lentgh
  const prev = () => setCurr((curr) => curr === 0 ? 7 - 1 : curr - 1)
  const next = () => setCurr((curr) => curr === 7 - 1 ? 0 : curr + 1)
  React.useEffect(() => {
   async function fetchData() {
      try {
        const data  = await getStreams();
        if (data) {
          setLiveCarousel(data.splice(-10, 7));
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='w-full mb-10 h-[350px] flex flex-row flex-nowrap justify-between items-center'>
        <button className="w-[10%] 
                          h-[10%] 
                          flex justify-start items-center
                       " 
                       onClick={prev}><MdKeyboardArrowLeft size={"80%"} /></button>
   
          <div className="max-w-[70%] h-full">
              <Carsoussel curr={curr}>     
                  {!liveCarousel ? null : liveCarousel.map((element, index) => (  
                    <div  key={index} className="w-full flex flex-row">
                       <ReactPlayer
                         url={`https://www.twitch.tv/${element.user_name}`}
                        className="react-player"
                        controls
                        width={"40vw"}
                        height={"90%"}
                      />
                <div className="w-[15vw] h-[90%] bg-[white] flex flex-col justify-center items-center">
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
          ))}
          </Carsoussel>
          </div>
          <button className="w-[10%]
                            h-[10%]
                            flex justify-end items-center
                          " 
                        onClick={next}><MdKeyboardArrowRight size={"80%"}/></button>
        </div>
      )
}
const Carsoussel = ({children: slides, curr}: ChildrenProps) => {
return (
  <div style={{overflow: 'hidden',
              position: 'relative',
              width: '100%',
              height: '100%',
          }}>
              <div style={{
                          transform: `translateX(-${curr * 100}%)`,
                          transitionDuration: '300ms',
                          transitionTimingFunction: 'ease-in-out',
                          display: 'flex',
                          flexDirection: 'row',
                          height: '100%',
                  }}>
                  {slides}
              </div>
      </div>
)
}
