'use client';
import * as React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { Cards } from './Cards';

type PropsStreamCard ={
    CallAPI: any,
    title: string,
    Choice: boolean,
    Tags: boolean,
}

export default function StreamCard({CallAPI, title, Choice, Tags} : PropsStreamCard){
    const [data, setdata] = React.useState<any>(null)
    const [Button, setButton] = React.useState<any>(true)
    const router = useRouter()
    const [valeurIndex, setValeurIndex] = React.useState<number>(3)
    React.useEffect(() => {
        CallAPI()
          .then((valeur: string[]) => setdata(valeur))
          .catch((error: Error)=> console.log(error));
      }, []);
    return(
        <div>
        <h2 className='text-lg m-2 font-[700]'>
            {Choice ? <Link href="/" className={`text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline`}>{title}</Link> 
                : (title === 'Vogue' ? <span>En Vogue</span>: null) 
                        ||
            (title !== 'Chaînes lives' ? <span>Chaînes de <Link href="/" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>{title}</Link> recommandées</span>: null)
                        || 
            (<>
            <Link href="/" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>{title} </Link>
                qui pourrait vous plaires
            </>)
                    
            }
          </h2>
              <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
              {!data ? <div>chargement...</div> : 
                    data.map((element: any, index: number) => (
                        index < valeurIndex && (
                            <Cards key={index} element={element} index={index} Propstags={Tags} />
                        )
            ))}
{Button ? <div className=' w-full flex items-center justify-evenly'>
            <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                <div className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded'>
                    <button className=' text-[14px] 
                            text-[#5c16c5] font-[550] hover:text-[black] 
                            hover:bg-[#efeff1] hover:rounded' 
                            onClick={() => {
                                if(Choice){
                                setValeurIndex(6)
                                setButton(false)
                                }
                                else{
                                    return router.push('/directory')
                                } 
                        }}>
                        {Choice ? 'Afficher Tout' : 'Afficher plus'}</button>
                        {Choice ? <KeyboardArrowRightIcon sx={{color: "#5c16c5"}} /> : <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} />}  
                        </div>
                        <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                        </div>
                        : null}
              </div>                      
          </div>
    )
}