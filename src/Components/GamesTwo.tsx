'use client';
import * as React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GetStreamGamesTwo } from '@/utils/api';
import { Cards } from './Cards';
import { API, API_STREAMS } from "@/types/api";

export async function Games_Two(){
    const router = useRouter()
    const [GamesTwo, setGamesTwo] = React.useState<API<API_STREAMS[]>>(null)
    const [ButtonSecondRecom, setButtonSecondRecom] = React.useState<any>(true)

    React.useEffect(() => {
        async function fetchData() {
            const data = await GetStreamGamesTwo();
            setGamesTwo(data);
        }
        fetchData();
    }, [])

    return(
        <div>
        <h2 className='text-lg m-2 font-[700]'>
              Chaînes de <Link href="/" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'> League of Legends</Link> recommandées
          </h2>
              <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
              {!GamesTwo ? <div>chargement...</div> : 
                    GamesTwo.map((element, index) => (
                <Cards  key={index} element={element} index={index} Propstags={false} Button={ButtonSecondRecom}/>
            ))}
                     {ButtonSecondRecom ? <div className=' w-full flex items-center justify-evenly'>
                                          <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                          <div className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded'>
                                              <button className=' text-[14px] text-[#5c16c5] font-[550] hover:text-[black] hover:bg-[#efeff1] hover:rounded' onClick={() => setButtonSecondRecom(false)}>Afficher plus</button>
                                               <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} />   
                                          </div>
                                          <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                      </div>
                                           : null}
              </div>                      
          </div>
    )
}