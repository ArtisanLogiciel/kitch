"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";

type PropsCards ={
    element: any,
    index: number,
    Propstags: boolean,
}

export function Cards({element, index, Propstags}: PropsCards){
    const router = useRouter();
    
return(
    <>
    <div key={index} className='hover:cursor-pointer w-[32%] flex mb-[2%] flex-col items-start justify-start' onClick={() => router.push(`/${element?.user_login}`)}>
        <div className='relative w-full'>
             <img  
             src={getImageSized(element?.thumbnail_url, '320', '180')} 
             width={320} height={180} 
             className='w-full h-full'>
             </img>
    <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p className='m-[3px]'>LIVE</p></div>
    <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p className='m-[3px]'>{element?.viewer_count <= 1000 ? element?.viewer_count  : getNumber_K_Mode(element?.viewer_count)} <span>spectateurs</span></p></div>
</div>
<div className='w-full grid pt-[2%] box-border grid-cols-[15%_85%]'>
    <div className='w-full flex items-start justify-start mt-[2%]'><img  src={getImageSized(element?.thumbnail_url, '40', '40')} width={40} height={40}  className='rounded-full w-[40px] h-[40px]'></img></div>
    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
        {Propstags === true ? <div></div> : <div className='w-full flex justify-start flex-wrap items-center flex-row '>
            {element?.tags?.map((liste: any, index: number) => 
                 index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
             )}
        </div>}
    </div>        
</div>
</div>  
    </>
)}


