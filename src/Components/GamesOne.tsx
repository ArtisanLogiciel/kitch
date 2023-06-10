'use client';
import * as React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { Cards } from './Cards';
import { GetStreamGamesOne } from '@/utils/api';



export function Games_1(){
    const [GamesOne , setGamesOne] = React.useState<any>(null);
    const [ButtonfirstRecom, setButtonfirstRecom] = React.useState<any>(true)

    React.useEffect(() => {
        GetStreamGamesOne()
        .then(valeur => setGamesOne(valeur))
        .catch(error => console.log(error))
    }, [])


    return(
        <div>
        <h2 className='text-lg m-2 font-[700]'>
              Chaînes de <Link href="/" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Discussion</Link> recommandées
          </h2>
              <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
              {!GamesOne ? <div>chargement...</div> : 
                    GamesOne.map((element: any, index: number) => (
                <Cards key={index} element={element} index={index} Propstags={false} Button={ButtonfirstRecom}/>
            ))}
                     {ButtonfirstRecom ? <div className=' w-full flex items-center justify-evenly'>
                                          <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                          <div className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded'>
                                              <button className=' text-[14px] text-[#5c16c5] font-[550] hover:text-[black] hover:bg-[#efeff1] hover:rounded' onClick={() => setButtonfirstRecom(false)}>Afficher plus</button>
                                               <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} />   
                                          </div>
                                          <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                      </div>
                                           : null}
              </div>                      
          </div>
    )

}