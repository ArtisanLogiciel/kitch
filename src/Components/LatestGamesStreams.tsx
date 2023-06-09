'use client';
import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { SecondCards } from './Cards';
import { LatestGamesStreams } from '@/utils/api';
import { API, API_STREAMS } from "@/types/api";

export async function GamesLatest(){
    const [dataLGames, setDataLGames] = React.useState<API<API_STREAMS[]>>(null)

    React.useEffect(() => {
        async function fetchData() {
            const data = await LatestGamesStreams();
            setDataLGames(data);
        }
        fetchData();
    
    }, [])
    return(
        <>
        <div>
        <h2 className='text-lg font-medium mt-[2%]'>
          <Link href="/" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Streams de jeux récemment sortis </Link>
          </h2>
              <div className='w-full flex flex-row flex-wrap items-center justify-between mb-[2%]'>
              {!dataLGames ? <div>chargement...</div> : 
                    dataLGames.map((element, index) => (
                <SecondCards key={index} element={element} index={index} Propstags={false} />
            ))}
                        <div className=' w-full flex items-center justify-evenly'>
                                          <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                          <div className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded'>
                                              <button className=' text-[14px] text-[#5c16c5] font-[550] hover:text-[black] hover:bg-[#efeff1] hover:rounded'>Afficher Tout</button>
                                              <KeyboardArrowRightIcon sx={{color: "#5c16c5"}} /> 
                                          </div>
                                          <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                      </div> 
              </div>                      
          </div>
        </>
    )
}