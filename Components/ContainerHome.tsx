'use client';
import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import { useSwiper } from 'swiper/react';

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;


async function fetchBoxeData(){
    try{
        const response = await fetch('http://localhost:3000/api/twitch/streams');
        const data = await response.json();
        console.log(data)
        const NewDatafilter = data.splice(-10, 7)
        console.log(NewDatafilter)
        return NewDatafilter
    }catch(error: any){
        console.log(error.message)
    }
}
function Nombres(nombre: number){
    const kol = nombre.toString()
    const tab = kol.split('')
    const longueur = tab.length
    const reconvertir = tab.map(elmnt => parseFloat(elmnt))
    if (longueur === 4){             
        const convertir = reconvertir.splice(2)
        const un = convertir[0];
        const deux = convertir[1];
        return `${un}.${deux}k`
    }
    else{
        const rien = longueur - 3     
        const convertir = reconvertir.splice(rien)
        const valeur = convertir.toString().replaceAll(',', '')
        return `${valeur}k`
    }
}

function Image(view: string){
    const un = view.replace('{width}', '50')
    const deux = un.replace('{height}', '50')
    return deux
}

export default function Container(){
    const swiper = useSwiper();
    const [data, setData] = React.useState<any>(null)
    const [error, setError] = React.useState<any>(null)

    React.useEffect(() => {
        
        async function fetchData() {
          try{
          const data = await fetchBoxeData(); 
          setData(data);
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
            <div className='w-full border-solid border-red-500 border-2' style={{height: '350px'}}>
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
        <button onClick={() => swiper.slideNext()}>Suivant</button>
        {!data ? <div>loading...</div> : data.map((element: any, index: number) => 
            <SwiperSlide  key={index} style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
            }}>
             <div className='GridSlide'>
                <ReactPlayer  url={`https://www.twitch.tv/${element?.user_name}`} className='react-player' controls width={'100%'} height={'100%'}/>
                <div className='InfosVideosSlide'>
                    <div className='StyleInfosSlide'>
                        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}><img  src={Image(element?.thumbnail_url)} style={{borderRadius: '50%', width: '50px', height: '50px'}}></img></div>
                        <div style={{width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column'}}>
                            <p style={{color: '#5C16C5'}}>{element?.user_name}</p>
                            <p style={{color: '#5C16C5', fontWeight: '200', fontSize: '12px'}}>{element?.game_name}</p>
                            <p style={{fontSize: '12px'}}>{element?.viewer_count < 1000 ? element?.viewer_count  : Nombres(element?.viewer_count)} <span>spectateurs</span></p>
                        </div>
                    </div>
                    <div className='w-full flex place-content-between flex-wrap items-center flex-row mt-3'>
                        {element?.tags.map((liste: any, index: number) => 
                            <div className='StyleTags'><p key={index} style={{color: '#53535F', fontSize: '12px', padding: '13%'}}>{liste}</p></div>
                        )}
                    </div>                 
                </div>
            </div>   
                </SwiperSlide>
        )}

        {/*<SwiperSlide style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><p>Slide 1</p></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>*/}
      </Swiper>
      </div>

          <p className="text-center text-cyan-500 ">Conteunu</p>
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