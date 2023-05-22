'use client';
import * as React from 'react'
import ReactPlayer from 'react-player/lazy'
import BarreDeRecherche from '../../../../Components/BarreDeRecherche';
import NavigLive from '../../../../Components/NaviguationLive';
import { useParams } from 'next/navigation';
 

export default function Home(){
    const params = useParams()

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
