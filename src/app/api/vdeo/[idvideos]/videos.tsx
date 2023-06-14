'use client';
import * as React from 'react'
import { useParams } from 'next/navigation';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import NavigationLive from '@/Components/NaviguationLive';

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>; 

export default function Home(){
    const params = useParams()

    return (
        <>
      <NavigationLive />
      <div className="ContenuPrincipale">
        <div>
        <ReactPlayer url={`https://www.twitch.tv/${params.idvideos}`} className='react-player' controls />
          Chemin videos/ IdVIdeos
        </div>
        </div>
    </>
          

    )
}
