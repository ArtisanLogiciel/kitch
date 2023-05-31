'use client';
import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Nombres, Image, SwiperButtonNext, SwiperButtonPrev } from '../../Components/UsefulsComponents';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

async function fetchBoxeData(){
    try{
        const response = await fetch('http://localhost:3000/api/twitch/streams');
        const data = await response.json();
        console.log(data)
        return data
    }catch(error: any){
        console.log(error.message)
    }
}
async function fetchCategories(categories: number){
    try{
        const response = await fetch(`http://localhost:3000/api/twitch/categories`);
        const data = await response.json();
        console.log(data)
        return data
    }catch(error: any){
        console.log(error.message)
    }
}
export default function Container(){
    const [data, setData] = React.useState<any>(null)
    const router = useRouter();
    const [dataSection, setDataSection] = React.useState<any>(null)
    const [error, setError] = React.useState<any>(null)

    React.useEffect(() => {
        
        async function fetchData() {
          try{
          const data = await fetchBoxeData(); 
          setData(data.splice(-10, 7));
          setDataSection(data.splice(6));
        }catch(error){
          setError(error)
        }}
    
        fetchData();
      }, []);
  
      if(error){
          return <div> Error : {error.message}</div>
      }
      if(!data){
        return <div>loading...</div>
      }

    return(
        <div className="ContenuPrincipale">
            <div className='w-full border-solid border-red-500 border-2 mb-10' style={{height: '350px'}}>
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
        
        {!data ? <div>loading...</div> : data.map((element: any, index: number) => 
            <SwiperSlide  key={index} style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
            }}>
             <div className='GridGlobaleHomeSlide'>
                <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}><SwiperButtonPrev><ArrowBackIosNewIcon /></SwiperButtonPrev></div>   
                <div className='GridSlide'>
                    <ReactPlayer  url={`https://www.twitch.tv/${element?.user_name}`} className='react-player' controls width={'100%'} height={'100%'}/>
                    <div className='InfosVideosSlide'>
                        <div className='StyleInfosSlide'>
                            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}><img  src={Image(element?.thumbnail_url, '50', '50')} style={{borderRadius: '50%', width: '50px', height: '50px'}}></img></div>
                            <div style={{width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column'}}>
                                <p style={{color: '#5C16C5'}}>{element?.user_name}</p>
                                <p style={{color: '#5C16C5', fontWeight: '200', fontSize: '12px'}}>{element?.game_name}</p>
                                <p style={{fontSize: '12px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p>
                            </div>
                        </div>
                        <div className='w-full flex justify-start flex-wrap items-center flex-row mt-3'>
                            {element?.tags.map((liste: any, index: number) => 
                                <div className='StyleTags' key={index}><p style={{color: '#53535F', fontSize: '12px', padding: '20%'}}>{liste}</p></div>
                            )}
                        </div>                 
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}><SwiperButtonNext><ArrowForwardIosIcon /></SwiperButtonNext></div>
            </div>   
                </SwiperSlide>
        )}
      </Swiper>
      </div>
      <div>
          <h2 className='text-lg font-medium m-2'>
            <Link href="" id='TitreChainesLive'>Chaines lives </Link>
                qui pourrait vous plaires
            </h2>
                <div className='Disposition'>
                    {dataSection.map((element: any, index: number) => (
                        <div className='SectionVideo' key={index} onClick={() => router.push(`/vdeo/${element?.user_name}`)}>
                            <div style={{position: 'relative', width: '100%'}}>
                                <img  src={Image(element?.thumbnail_url, '313', '114')} style={{width: '100%', height: '100%'}}></img>
                                <div className='DivLive'><p style={{margin: '3px'}}>LIVE</p></div>
                                <div className='DivSpectateurs'> <p style={{margin: '3px'}}>{element?.viewer_count <= 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p></div>
                            </div>
                            <div className='DetailsVdeoSection'>
                                <div style={{width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '2%'}}><img  src={Image(element?.thumbnail_url, '40', '40')} style={{borderRadius: '50%', width: '40px', height: '40px'}}></img></div>
                                <div style={{width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', marginTop: '2%'}}>
                                    <h3 style={{width: '100%', fontSize: '14px', fontWeight: '600'}}>{element?.title.length <= 50 ? element?.title : element?.title.substring(0, 50) + '...'}</h3>
                                    <p style={{width: '100%', fontSize: '13px', color: '#53535F'}}>{element?.user_name}</p>
                                    <p style={{width: '100%', fontSize: '13px', color: '#53535F'}}>{element?.game_name}</p>
                                    <div className='w-full flex justify-start flex-wrap items-center flex-row '>
                                        {element?.tags.map((liste: any, index: number) => 
                                            index < 4 ?  <div className='StyleTags2 mr-2' key={index}><p  style={{color: '#53535F', fontSize: '12px', padding: '5%'}}>{liste}</p></div> : null
                                         )}
                                    </div>
                                </div>        
                            </div>
                        </div>
                    ))}

                </div>                      
      </div>

          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Contenu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Contenu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
          <p>Conteunu</p>
       
        </div>
    )
}