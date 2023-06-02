'use client';
import * as React from 'react'
import { useParams } from 'next/navigation';


export function TwitchChat(){
    const params = useParams()
      return (
        <div className='w-full h-[80vh] border border-solid border-green-600'>
            <iframe id="ChatTwittos"
                src={`https://www.twitch.tv/embed/${params.idvideos}/chat?parent=localhost`}
                height={'100%'}
                width={'100%'}>
            </iframe>    
         </div>
      )
}