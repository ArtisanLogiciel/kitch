'use client';
import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Nombres, Image, SwiperButtonNext, SwiperButtonPrev } from './UsefulsComponents';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import {GetVogue, 
        GetRecentlyGames, 
        LatestGamesStreams, 
        GetStreamGamesOne, 
        GetStreamGamesTwo, 
        GetStreamGamesThree, 
        GetCreative, 
        GetCombat,
        GetPlatformAndGames,
        GetSport,
        GetCarSimulation,
    } from './FetchApi';




const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
 async function fetchBoxeData(){
    try{
        const response = await fetch('http://localhost:3000/api/twitch/streams');
        const data = await response.json();
        return data
    }catch(error: any){
        console.log(error.message)
    }
}
async function fetchCategories(){
    try{
        const response = await fetch(`http://localhost:3000/api/twitch/categories`);
        const data = await response.json();
        return data
    }catch(error: any){
        console.log(error.message)
    }
}

export default function Container(){
    //utilisation de useReducer plus tard
    const router = useRouter();
    const [dataCaroussel, setDataCaroussel] = React.useState<any>(null)
    const [data, setData] = React.useState<any>(null)
    const [dataVogue, setdataVogue] = React.useState<any>(null)
    const [dataLGames, setDataLGames] = React.useState<any>(null)
    const [dataRGames, setDataRGames] = React.useState<any>(null)
    const [dataCategories, setCategories] = React.useState<any>(null)
    const [GamesOne , setGamesOne] = React.useState<any>(null)
    const [GamesTwo, setGamesTwo] = React.useState<any>(null)
    const [GamesThree, setGamesThree] = React.useState<any>(null)
    const [dataCreative, setdataCreative] = React.useState<any>(null)
    const [dataCombat, setdataCombat] = React.useState<any>(null)
    const [dataPlatform, setdataPlatform] = React.useState<any>(null)
    const [dataSport, setdataSport] = React.useState<any>(null)
    const [dataSupercar, setdataSupercar] = React.useState<any>(null)
    // utilisation de use reducer pour les boutons
    const [ButtonCHLive, setButtonCHLive] = React.useState<any>(true)
    const [ButtonVogue, setButtonVogue] = React.useState<any>(true)
    const [ButtonfirstRecom, setButtonfirstRecom] = React.useState<any>(true)
    const [ButtonSecondRecom, setButtonSecondRecom] = React.useState<any>(true)
    const [ButtonThirstRecom, setButtonThirstRecom] = React.useState<any>(true)
    React.useEffect(() => {
        
        async function fetchData() {
          const data = await fetchBoxeData();
          const data2 = await fetchCategories();
          setData(data)
          setDataCaroussel(data.splice(-10, 7));
          setCategories(data2)
       }

       GetVogue().then(valeur => setdataVogue(valeur)).catch(error => console.log(error))
       GetRecentlyGames().then(valeur => setDataRGames(valeur)).catch(error => console.log(error))
       LatestGamesStreams().then(valeur => setDataLGames(valeur)).catch(error => console.log(error))
       GetStreamGamesOne().then(valeur => setGamesOne(valeur)).catch(error => console.log(error))
       GetStreamGamesTwo().then(valeur => setGamesTwo(valeur)).catch(error => console.log(error))
       GetStreamGamesThree().then(valeur => setGamesThree(valeur)).catch(error => console.log(error))
       GetCreative().then(valeur => setdataCreative(valeur)).catch(error => console.log(error))
       GetCombat().then(valeur => setdataCombat(valeur)).catch(error => console.log(error))
       GetPlatformAndGames().then(valeur => setdataPlatform(valeur)).catch(error => console.log(error))
       GetSport().then(valeur => setdataSport(valeur)).catch(error => console.log(error))
       GetCarSimulation().then(valeur => setdataSupercar(valeur)).catch(error => console.log(error))    
    
        fetchData();
      }, []);
  
    return(
        <div className="m-[0px_0.4rem_0px_0.4rem] w-[98%] p-[3vh_1vw_3vh_1vw] flex items-start justify-start flex-col flex-wrap border-2 border-solid  border-[#00FF95]">
            <div className='w-full mb-10 h-[350px]'>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        style={{width: '100%', height: '100%'}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {!dataCaroussel ? <div>loading...</div> : dataCaroussel.map((element: any, index: number) => 
            <SwiperSlide  key={index} style={{
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'center'
            }}>
             <div className='w-full h-[300px] grid grid-cols-[12%_77%_11%]'>
                <div className='w-full flex items-center justify-start'><SwiperButtonPrev><ArrowBackIosNewIcon /></SwiperButtonPrev></div>   
                <div className='w-full h-[300px] grid grid-cols-[75%_25%]'>
                    <ReactPlayer  url={`https://www.twitch.tv/${element?.user_name}`} className='react-player' controls width={'100%'} height={'100%'}/>
                    <div className='w-full h-full bg-[white] flex flex-col justify-center items-center'>
                        <div className='w-full grid grid-cols-[40%_60%]'>
                            <div className='w-full flex items-center justify-center'><img  src={Image(element?.thumbnail_url, '50', '50')} className='rounded-full w-[50px] h-[50px]'></img></div>
                            <div className='w-full flex items-start justify-start flex-col'>
                                <p className='text-[#5C16C5]'>{element?.user_name}</p>
                                <p className='text-[#5C16C5] font-[200] text-[12px]'>{element?.game_name}</p>
                                <p className='text-[12px]'>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p>
                            </div>
                        </div>
                        <div className='w-full flex justify-start flex-wrap items-center flex-row mt-3'>
                            {element?.tags.map((liste: any, index: number) => 
                                <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div>
                            )}
                        </div>                 
                    </div>
                </div>
                <div className='w-full flex items-center justify-end'><SwiperButtonNext><ArrowForwardIosIcon /></SwiperButtonNext></div>
            </div>   
                </SwiperSlide>
        )}
      </Swiper>
      </div>
      <div>
          <h2 className='text-lg font-[600] m-2'>
            <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Chaines lives </Link>
                qui pourrait vous plaires
            </h2>
                <div className='w-full flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!data ? <div>chargement...</div> : data.map((element: any, index: number) =>   {
                        if(ButtonCHLive === true){
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div className='relative w-full'>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} className='w-full h-full'></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p className='m-[3px]'>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p className='m-[3px]'>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border grid-cols-[15%_85%]'>
                                <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>        
                            </div>
                        </div>
                        )}}
                        else if(ButtonCHLive === false){
                            if(index < 6){
                                return(
                            <div className='hover:cursor-pointer w-[32%] flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                                <div style={{position: 'relative', width: '100%'}}>
                                    <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                    <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                    <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                                </div>
                                <div className='w-full grid pt-[2%] box-border grid-cols-[15%_85%]'>
                                    <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                        <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                            {element?.tags.map((liste: any, index: number) => 
                                                index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                            )}
                                        </div>
                                    </div>          
                                </div>
                            </div>
                            )}}
                    })}
                        { ButtonCHLive ? <div className=' w-full flex items-center justify-evenly'>
                                            <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                            <div  className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded '>
                                                <button className=' text-[14px] text-[#5c16c5] font-[550]' onClick={() => setButtonCHLive(false)}>Afficher plus</button>
                                                 <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} id="test"/>   
                                            </div>
                                            <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                        </div>
                                             : null}
                </div>                      
      </div>

      <div className='w-full border-0   flex items-center justify-evenly row flex-wrap mb-[2%]'>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Jeux</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>IRL</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Musique</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon h-[53px]" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Esport</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg">
                                    
                        </img>
                    </div>       
                  </div>
                  <div className='w-[19%] flex items-center justify-around bg-[#772ce8] h-[45px] rounded hover:bg-[#9165d3] hover:cursor-pointer'>
                     <div className='flex items-center justify-center'>
                        <p className='text-white font-semibold text-[24px]'>Créatif</p>
                    </div>
                     <div>
                        <img className="tw-image vertical-selector__card_icon" 
                                alt="Icône jeux" sizes="65px" 
                                src="https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg">
                                    
                        </img>
                    </div>       
                  </div>
        
            </div>  

          <div className='mb-[2%] w-full h-[50vh]'>
          <h2 className='text-lg font-medium m-2'>
            <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Catégories </Link>
                qui pourrait vous plaires
            </h2>                            
                <div className='w-full border-0  -600 flex justify-start items-start mr-[1%]'>
                    {!dataCategories ? <div>chargement...</div> : dataCategories.map((element: any, index: number) => (            
                           <div key={index} className='flex items-start justify-start flex-col h-[100%] w-[155px] mr-[1%] relative'>
                                <img src={Image(element?.box_art_url, '155', '206')}></img>    
                                <h2 className='font-semibold text-[15px] w-full mt-[1%]'>{element?.name}</h2>
                            </div>
                    ))}              
                </div>
                <div className='h-[0.5px] w-full bg-[black] mt-[1%]'></div>  
          </div>
          <div>
          <h2 className='text-lg m-2 font-[700]'>
                 En vogue       
            </h2>
                <div className='w-full border border-solid -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!dataVogue ? <div>chargement...</div>: dataVogue.map((element: any, index: number) =>   {
                        if(ButtonVogue){
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border border-solid  grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>         
                            </div>
                        </div>
                        )}}
                        else if(!ButtonVogue){
                            if(index < 6){
                                return(
                            <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                                <div style={{position: 'relative', width: '100%'}}>
                                    <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                    <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                    <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                                </div>
                                <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                                    <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                        <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                            {element?.tags.map((liste: any, index: number) => 
                                                index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                            )}
                                        </div>
                                    </div>          
                                </div>
                            </div>
                            )}}    
                    })}
                            {ButtonVogue ? <div className=' w-full flex items-center justify-evenly'>
                                            <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                            <div className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded'>
                                                <button className=' text-[14px] text-[#5c16c5] font-[550] hover:text-[black] hover:bg-[#efeff1] hover:rounded' onClick={() => setButtonVogue(false)}>Afficher plus</button>
                                                 <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} />   
                                            </div>
                                            <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                        </div>
                                             : null}
                </div>                      
            </div>
            <div className='mb-[2%] w-full h-[50vh]'>
          <h2 className='text-lg m-2 font-[700]'>
                Jeux récemment sortis
            </h2>                            
                <div className='w-full border-0  -600 flex justify-start items-start mr-[1%]'>
                    {!dataRGames ? <div>chargement...</div> : dataRGames.map((element: any, index: number) => (
                        <div key={index} className='flex items-start justify-start flex-col h-[100%] w-[155px] mr-[1%]'>
                            <div className='w-full relative'>
                                <img src={Image(element?.box_art_url, '155', '206')}></img>        
                                <div className='h-[2.5vh] flex items-center justify-center rounded-full absolute m-[0.5rem_0.6rem] bg-[#ff75e6] top-0 right-0 p-[3%]'>
                                    <p className='m-[3px] text-black font-[600] text-[12px]'>NOUVEAU</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='font-semibold text-[15px] w-full mt-[1%]'>{element?.name}</h2>
                            </div>
                        </div>    
                    ))}                     
                </div>
          </div>
             <div className='h-[0.5px] w-full bg-[black] mt-[1%]'></div>
          <div>
          <h2 className='text-lg font-medium mt-[2%]'>
            <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Streams de jeux récemment sortis </Link>
            </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!dataLGames ? <div>chargement...</div> : dataLGames.map((element: any, index: number) =>   {
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>         
                            </div>
                        </div>
                        )}
                        else{
                            return null
                        }
                    })}
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
            <div>
          <h2 className='text-lg m-2 font-[700]'>
                Chaînes de <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Discussion</Link> recommandées
            </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!GamesOne ? <div>chargement...</div> : GamesOne.map((element: any, index: number) =>   {
                        if(ButtonfirstRecom){
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>         
                            </div>
                        </div>
                        )}}
                        else if(!ButtonfirstRecom){
                            if(index < 6){
                                return(
                            <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                                <div style={{position: 'relative', width: '100%'}}>
                                    <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                    <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                    <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                                </div>
                                <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                                    <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                        <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                            {element?.tags.map((liste: any, index: number) => 
                                                index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                            )}
                                        </div>
                                    </div>         
                                </div>
                            </div>
                            )}}
                    })}
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
            <div>
          <h2 className='text-lg m-2 font-[700]'>
                Chaînes de <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'> League of Legends</Link> recommandées
            </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!GamesTwo ? <div>chargement...</div> : GamesTwo.map((element: any, index: number) =>   {
                        if(ButtonSecondRecom){
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>        
                            </div>
                        </div>
                        )}}
                        else if(!ButtonSecondRecom){
                            if(index < 6){
                                return(
                            <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                                <div style={{position: 'relative', width: '100%'}}>
                                    <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                    <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                    <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                                </div>
                                <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                                    <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                        <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                            {element?.tags.map((liste: any, index: number) => 
                                                index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                            )}
                                        </div>
                                    </div>         
                                </div>
                            </div>
                            )}}
                    })}
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
            <div>
          <h2 className='text-lg m-2 font-[700]'>
                Chaînes de <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Fortnite</Link> recommandées
            </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!GamesThree ? <div>chargement...</div> : GamesThree.map((element: any, index: number) =>   {
                        if(ButtonThirstRecom){
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                                <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                        <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                            {element?.tags.map((liste: any, index: number) => 
                                                index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                            )}
                                        </div>
                                    </div>          
                            </div>
                        </div>
                        )}}
                        else if(!ButtonThirstRecom){
                            if(index < 6){
                                return(
                            <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                                <div style={{position: 'relative', width: '100%'}}>
                                    <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                    <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                    <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                                </div>
                                <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                                    <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                    <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                        <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                        <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                        <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                            {element?.tags.map((liste: any, index: number) => 
                                                index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                            )}
                                        </div>
                                    </div>         
                                </div>
                            </div>
                            )}}
                    })}
                        {ButtonThirstRecom ? <div className=' w-full flex items-center justify-evenly'>
                                            <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                            <div className='w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded'>
                                                <button className=' text-[14px] text-[#5c16c5] font-[550] hover:text-[black] hover:bg-[#efeff1] hover:rounded' onClick={() => setButtonThirstRecom(false)}>Afficher plus</button>
                                                 <KeyboardArrowDownIcon sx={{color: "#5c16c5"}} />   
                                            </div>
                                            <div className='w-[40%]'><div className='h-[0.5px] w-full bg-[black]'></div></div>
                                        </div>
                                             : null}
                </div>                      
            </div>
            <div>
                <h2 className='text-lg font-medium m-2'>
                    <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Créativité</Link>
                    </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!dataCreative ? <div>chargement...</div> : dataCreative.map((element: any, index: number) =>   {
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>         
                            </div>
                        </div>
                        )}
                        else{
                            return null
                        }
                    })}
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
            <div>
                <h2 className='text-lg font-medium m-2'>
                    <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Jeux de combat</Link>
                    </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!dataCombat ? <div>chargement...</div> : dataCombat.map((element: any, index: number) =>   {
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>          
                            </div>
                        </div>
                        )}
                        else{
                            return null
                        }
                    })}
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
            <div>
                <h2 className='text-lg font-medium m-2'>
                    <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Jeux de cartes et de plateau</Link>
                    </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!dataPlatform ? <div>chargement...</div> : dataPlatform.map((element: any, index: number) =>   {
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>         
                            </div>
                        </div>
                        )}
                        else{
                            return null
                        }
                    })}
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
            <div>
                <h2 className='text-lg font-medium m-2'>
                    <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Simulations de course</Link>
                    </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!dataSupercar ? <div>chargement...</div> : dataSupercar.map((element: any, index: number) =>   {
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>          
                            </div>
                        </div>
                        )}
                        else{
                            return null
                        }
                    })}
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
            <div>
                <h2 className='text-lg font-medium m-2'>
                    <Link href="" className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Jeux de sports</Link>
                    </h2>
                <div className='w-full border  -600 flex flex-row flex-wrap items-center justify-between mb-[2%]'>
                    {!dataSport ? <div>chargement...</div> : dataSport.map((element: any, index: number) =>   {
                        if(index < 3){
                            return(
                        <div className='hover:cursor-pointer w-[32%] border solid -500 flex mb-[2%] flex-col items-start justify-start' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '320', '180')} style={{width: '100%', height: '100%'}}></img>
                                <div className='h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='w-full grid pt-[2%] box-border border   grid-cols-[15%_85%]'>
                            <div className='w-full flex items-start justify-start mt-[2%]'><img  src={Image(element?.thumbnail_url, '40', '40')}  className='rounded-full w-[40px] h-[40px]'></img></div>
                                <div  className='w-full flex items-start justify-start mt-[2%] flex-col'>
                                    <h3 className='w-full text-[14px] font-[600] whitespace-nowrap'>{element?.title.length <= 33 ? element?.title : element?.title.substring(0, 33) + '...'}</h3>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.user_name}</p>
                                    <p className='w-full text-[13px] text-[#53535F]'>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                             index < 4 ?  <div key={index} className='bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded'>{liste}</div> : null
                                         )}
                                    </div>
                                </div>         
                            </div>
                        </div>
                        )}
                        else{
                            return null
                        }
                    })}
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
            <div className='w-full h-[20vh]  border-0   flex justify-center items-center'>
                <img alt='logo amazon campany' height='1vh' width='15%' src='https://static.twitchcdn.net/assets/An-AmazonCompanyBlack-e5a905ee39488e6a10cf.png'></img>
            </div>
</div>
)}