'use client';
import * as React from 'react'
import BarreDeRecherche from '../../../../Components/BarreDeRecherche';
import NavigLive from '../../../../Components/NaviguationLive';
import { useParams } from 'next/navigation';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import { TwitchChat } from './Chatting';
import { fetchStreams } from '../../../../Components/FetchSearch';
import { Image } from '../../../../Components/UsefulsComponents';



const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
  
export default function Home(){
  // suprimmer le comportement du scroll horizontale si un message est trop long
  //const [chatting, setChatting] = React.useState<any[]>([])
  const [dataVDO, setDataVDO] = React.useState<any>(null)
  //const [dataPhotos, setDatPhotos] = React.useState<any>([])
    const params = useParams()
    //const Username = params.idvideos;

    React.useEffect(() => {
      fetchStreams(params.idvideos).then(marvel => console.log(marvel)).catch(error => {
        console.log(error)
    })
      
    }, [])


    return (
  <>
      <BarreDeRecherche />
      <NavigLive />
      <div className="WidthContainer h-full border-2 border-solid border-b-yellow-300 marginLeftVw">
        <div className='VdeoContainer'>
          <div className='Blockvideos'>
            <ReactPlayer url={`https://www.twitch.tv/${params.idvideos}`} className='react-player' controls width={'100%'} height={'70vh'}/>
              <div style={{width: '100%'}}>
                  <div style={{width: '25%'}}>
                      {/*<img  src={Image(dataVDO?.thumbnail_url, '50', '50')} style={{borderRadius: '50%', width: '50px', height: '50px'}}></img>*/}
                      <p>Image</p>
                  </div>
                  <div style={{width: '40%'}}>
                        <h2>{dataVDO?.user_name}</h2>
                        <p>{dataVDO?.title}</p>
                        <p>{dataVDO?.game_name}</p>
                  </div>
                  <div>
                      <button>Suivre</button>
                      <button>S'abonner</button>
                  </div>
                  
              </div>
          </div>
          
              <TwitchChat />
        </div>  
      </div>
  </>
          

    )
}
