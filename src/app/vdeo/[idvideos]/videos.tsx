'use client';
import * as React from 'react'
import { useParams } from 'next/navigation';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
//import { TwitchChat } from './Chatting';
import { fetchStreams } from '../../../../Components/FetchApi';
import { Image } from '../../../../Components/UsefulsComponents';




const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
  
export default function VideosContainer(){
  // suprimmer le comportement du scroll horizontale si un message est trop long
  //const [chatting, setChatting] = React.useState<any[]>([])
  const [dataVDO, setDataVDO] = React.useState<any>(null)
  //const [dataPhotos, setDatPhotos] = React.useState<any>([])
    const params = useParams()
    console.log(dataVDO)
    const Username = params.idvideos;

    React.useEffect(() => {
      fetchStreams(Username).then(marvel => setDataVDO(marvel)).catch(error => {
        console.log(error)
    })
      
    }, [])


    return (
          <>
            <ReactPlayer url={`https://www.twitch.tv/${params.idvideos}`} className='react-player' controls width={'100%'} height={'70vh'}/>
              <div style={{width: '100%'}}>
                {!dataVDO ? null :  dataVDO.map((element: any, index: number) => (
                    <div key={index}>
                    <div style={{width: '25%'}}>
                          <img  src={Image(element?.thumbnail_url, '50', '50')} className='rounded-full w-[50px] h-[50px]'></img>
                      </div>
                      <div style={{width: '40%'}}>
                            <h2>{element?.user_name}</h2>
                            <p>{element?.title}</p>
                            <p>{element?.game_name}</p>
                      </div>
                      <div>
                          <button>Suivre</button>
                          <button>S'abonner</button>
                      </div> 
                      </div> 
                    ))}
              </div>      
          </>
    )}
