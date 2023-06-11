'use client';
import * as React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Cards } from './Cards';
import { GetVogue } from '@/utils/api';


export function Vogue(){
const [ButtonVogue, setButtonVogue] = React.useState<any>(true)
const [dataVogue, setdataVogue] = React.useState<any>(null)


React.useEffect(() => {
    GetVogue()
    .then(valeur => setdataVogue(valeur))
    .catch(error => console.log(error))
}, [])

if(!dataVogue){
    return null
}
        return(
            <div>
          <h2 className='text-lg m-2 font-[700]'>
                 En vogue       
            </h2>
                <div className='w-full border border-solid -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                {!dataVogue ? <div>chargement...</div> : 
                    dataVogue.map((element: any, index: number) => (
                <Cards key={index} element={element} index={index} Propstags={false} Button={ButtonVogue}/>
            ))}
            { ButtonVogue ? <div className=' w-full flex items-center justify-evenly'>
                                <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                <div  className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded '>
                                    <button className=' text-[14px] text-[#5c16c5] font-[550]' onClick={() => setButtonVogue(false)}>Afficher plus</button>
                                     <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} id="test"/>   
                                </div>
                                <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                            </div>
                               : null}
            </div>                      
        </div>
)}