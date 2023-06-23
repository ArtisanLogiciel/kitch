'use client';
import * as React from 'react'
import { getImageSized } from "@/utils/getImageSized";
import { GetRecentlyGames } from '@/utils/api';
import Link from 'next/link';



export function RecentlyGames(){
    const [dataRGames, setDataRGames] = React.useState<any>(null)
    React.useEffect(() => {
        GetRecentlyGames()
        .then(valeur => setDataRGames(valeur))
        .catch(error => console.log(error))
    }, [])
        return(
            
            <div className='mb-[4%] w-full'>
          <h2 className='text-lg m-2 font-[700]'>
                Jeux récemment sortis
            </h2> 
                                       
                <div className='w-full flex justify-between items-start mr-[1%]'>
                    {!dataRGames ? <div>chargement...</div> : dataRGames.map((element: any, index: number) => (
                        <Link
                        href={`/directory/game/${element?.name}`}
                        key={index}
                      >
                        <div key={index} className='flex items-start justify-start flex-col h-[100%] w-[155px] mr-[1%]'>
                            <div className='w-full relative'>
                                <img src={getImageSized(element?.box_art_url, '155', '206')}></img>        
                                <div className='h-[2.5vh] flex items-center justify-center rounded-full absolute m-[0.5rem_0.6rem] bg-[#ff75e6] top-0 right-0 p-[3%]'>
                                    <p className='m-[3px] text-black font-[600] text-[12px]'>NOUVEAU</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='font-semibold text-[15px] w-full mt-[1%]'>{element?.name}</h2>
                            </div>
                        </div>
                       </Link>     
                    ))}                     
                </div>
          </div>
        )
}