'use client';
import * as React from 'react'
import { useParams } from 'next/navigation';


export function TwitchChat(){
    const params = useParams()
      return (
        <div style={{width: '100%', height: '80vh', border: '1px solid green'}} className='scroller' id='ChatContainer'>
            <iframe id="ChatTwittos"
                src={`https://www.twitch.tv/embed/${params.idvideos}/chat?parent=localhost`}
                height={'100%'}
                width={'100%'}>
            </iframe>    
         </div>
      )
}