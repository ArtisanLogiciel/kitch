'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import SkeletonLive from './skeletons';
import { Nombres, Image } from './UsefulsComponents';

 async function fetchBoxeData(){
    try{
        const response = await fetch('http://localhost:3000/api/twitch/streams');
        const data = await response.json();
        return data
    }catch(error: any){
        console.log(error.message)
    }
}
      
export default function NavigLive(){
    const router = useRouter();
    const chaine = 'Chaînes recommandées';
    const [data, setData] = React.useState<any>(null);
    console.log(data)
    
    React.useEffect(() => {
        
      async function fetchData() {
        const data = await fetchBoxeData(); 
        setData(data);
     }
  
      fetchData();
    }, [])

    return(
       <div className='bg-[#efeff1] w-[19%] h-[100vh] fixed z-[900] top-[9vh] left-[auto] flex flex-col box-content'>
            <div className=' border border-solid border-transparent w-full h-[8%] flex flex-row items-center justify-center'>
                <h2 className='text-[0.9em] font-[400]'>{chaine.toLocaleUpperCase()}</h2>
                <svg width="3.5vw" height="3.5vh" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1q25cff-1 dSicFr"><g><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g></svg>
            </div>
           
            <div className='border border-solid border-transparent w-full h-[90%] flex flex-col flex-nowrap'>
                    {!data ? <SkeletonLive /> : data.map((channelName: any, index: number) => 
                    index > 9 ? null :
                (
                <div className="w-full h-[8%] border border-solid border-transparent grid grid-cols-[18%_82%] hover:cursor-pointer" key={index} onClick={() => router.push(`/vdeo/${channelName?.user_name}`)}>
                    <div  className='w-full h-full flex items-center justify-center'>
                        <img  src={Image(channelName?.thumbnail_url, '30', '30')} className='rounded-full w-[30px] h-[30px]'></img>
                    </div>
                    <div  className='w-full h-full flex justify-evenly items-center flex-row flex-nowrap'>
                        <div className='w-[75%] h-[100%] flex justify-center items-start flex-col'>
                            <p>{channelName?.user_name}</p>
                            <p className='text-[13px] font-[lighter]'>{channelName?.game_name.length > 17 ? channelName?.game_name.substring(0, 18) + "..." : channelName?.game_name}</p>
                        </div>
                    <div  className='w-[25%] h-[100%] flex justify-evenly items-center flex-row flex-nowrap'>
                        <div className='bg-[#eb0400] w-[8px] h-[8px] rounded-full'></div>
                        <p className='text-[13px] font-[lighter]'>{channelName?.viewer_count < 1000 ? <div>channelName?.viewer_count</div>  : Nombres(channelName?.viewer_count)}</p>
                    </div>
                  </div>  
            </div>
                ))}
                
            </div>
       </div>    
    )
}
