'use client';
import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { SecondCards } from './Cards';
import { GetPlatformAndGames} from '@/utils/api';



export function Platform(){
    const [dataPlatform, setdataPlatform] =  React.useState<any>(null)
    React.useEffect(() => {
        GetPlatformAndGames()
        .then(valeur => setdataPlatform(valeur))
        .catch(error => console.log(error))
    }, [])
    return(
        <>
        <div>
                <h2 className='text-lg font-medium m-2'>
                    <Link href="/" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Jeux de cartes et de plateau</Link>
                    </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                {!dataPlatform ? <div>chargement...</div> : 
                        dataPlatform.map((element: any, index: number) => (
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