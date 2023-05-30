'use client';
import * as React from 'react'
import BarreDeRecherche from '../../../../Components/BarreDeRecherche';
import NavigLive from '../../../../Components/NaviguationLive';
import { useParams } from 'next/navigation';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";


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
      <div className="ContenuPrincipale">
        <div>
        <ReactPlayer url={`https://www.twitch.tv/${params.idvideos}`} className='react-player' controls />
          Chemin videos/ IdVIdeos
        </div>
        </div>
    </>
          

    )
}
