"use client";

//import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

// Components
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";

export async function LiveChannels() {
  const router = useRouter();
  const [ButtonCHLive, setButtonCHLive] = React.useState<any>(true)
  const [liveChannels, setLiveChannels] = React.useState<API<API_STREAMS[]>>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setLiveChannels(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return liveChannels ? (
    <div>
      <h2 className='text-lg font-[600] m-2'>
        <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>
          Chaînes lives{" "}
        </Link>
        qui pourraient vous plaire
      </h2>
      <div className='w-full flex flex-row flex-wrap items-center justify-between mb-[2%]'>
        {liveChannels.map((element, index) => {
          if(ButtonCHLive === true){
            if(index < 3){
                return(
            <div className='hover:cursor-pointer w-[32%] flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/${element?.user_login}`)}>
                <div className='relative w-full'>
                    <img  src={getImageSized(element?.thumbnail_url, '320', '180')} className='w-full h-full'></img>
                    <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p className='m-[3px]'>LIVE</p></div>
                    <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p className='m-[3px]'>{element?.viewer_count <= 1000 ? element?.viewer_count  : getNumber_K_Mode(element?.viewer_count)} <span>spectateurs</span></p></div>
                </div>
                <div className='w-full grid pt-[2%] box-border grid-cols-[15%_85%]'>
                    <div className='w-full flex items-start justify-start mt-[2%]'><img  src={getImageSized(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                        <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                            {element?.tags.map((liste: any, index: number) => 
                                 index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                             )}
                        </div>
                    </div>        
                </div>
            </div>
            )}}
            else if(ButtonCHLive === false){
                if(index < 6){
                    return(
                <div className='hover:cursor-pointer w-[32%] flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                    <div style={{position: 'relative', width: '100%'}}>
                        <img  src={getImageSized(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                        <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                        <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : getNumber_K_Mode(element?.viewer_count)} <span>spectateurs</span></p></div>
                    </div>
                    <div className='w-full grid pt-[2%] box-border grid-cols-[15%_85%]'>
                        <div className='w-full flex items-start justify-start mt-[2%]'><img  src={getImageSized(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                        <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                            <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                            <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                            <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                            <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                {element?.tags.map((liste: any, index: number) => 
                                    index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                )}
                            </div>
                        </div>          
                    </div>
                </div>
                )}}
        })}
            { ButtonCHLive ? <div className=' w-full flex items-center justify-evenly'>
                                <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                <div  className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded '>
                                    <button className=' text-[14px] text-[#5c16c5] font-[550]' onClick={() => setButtonCHLive(false)}>Afficher plus</button>
                                     <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} id="test"/>   
                                </div>
                                <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                            </div>
                                 : null}
          </div>  
    </div>
  ) : null;
}
