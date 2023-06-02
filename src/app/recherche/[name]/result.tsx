'use client';
import * as React from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { GetUsers } from '../../../../Components/FetchApi';

export default function Results(){
   const [valeur, setValeur] = React.useState<any>(null)
   const [error, setError] = React.useState<any>(null)
   const router = useRouter()         
   const params = useParams()
   const Valuesearch = params.name;


    React.useEffect(() => {
        GetUsers(Valuesearch).then(marvel => setValeur(marvel)).catch(error => {
            setError(error)
            console.log(error)
        })
    }, [])
    if(!valeur){
        return(
            <div>loading...</div>
        )
    }
    if(error){
        return(
            <div>Erreur : {error.message}</div>
        )
    }
    return (
        <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]"> 
                <h1 className='mb-10 text-[20px] font-semibold'>Chaines</h1>
                    {valeur.map((element: any, index: number) => {
                        
                        if(element?.is_live === false){
                         return(   
                        <div className='w-full flex flex-row mb-10' key={index} style={{height: '25vh'}}>
                               <div className='w-1/5 border-solid border-fuchsia-500 border-2 flex justify-center items-center'><img  className='rounded-full w-32 h-32 border border-gray-300 border-1' alt={element?.title} src={element?.thumbnail_url}></img></div> 
                               <div className='w-4/5 border-solid border-red-600 border-2'><h1 className='text-[18px] font-semibold'>{element?.display_name}</h1></div>
                        </div>
                    )
                        }
                        else if(element?.is_live === true){
                            return(   
                                <div className='w-full flex flex-row mb-10' key={index} style={{height: '25vh'}}>
                                       <div className='w-1/5 border-solid border-fuchsia-500 border-2 flex justify-center items-center relative hover:cursor-pointer' onClick={() => router.push(`/vdeo/${element?.display_name}`)}>
                                            <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p className='text[12px]'>LIVE</p></div>
                                            <img  className='rounded-full w-32 h-32 border border-gray-300 border-1' alt={element?.title} src={element?.thumbnail_url}></img>
                                        </div> 
                                       <div className='w-4/5 border-solid border-red-600 border-2 flex justify-start items-start flex-col'>
                                            <h1 className='text-[18px] font-semibold'>{element?.display_name}</h1>
                                        </div>
                                </div>
                            )}
                        else{
                            <p>Cas à part</p>
                        }
                    })}
            </div>
        )}