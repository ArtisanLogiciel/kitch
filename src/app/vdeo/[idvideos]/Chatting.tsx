'use client';
import * as React from 'react'
import { useParams } from 'next/navigation';


export function TwitchChat(){
    const [chatting, setChatting] = React.useState<any[]>([])
    const params = useParams()
    const Username = params.idvideos;
    React.useEffect(() => {
        const tmi = require('tmi.js');
        
        const client = new tmi.Client({
          channels: [ `${Username}` ]
      });
        
        client.connect();
        
        client.on('message', (channel: any, tags: any, message: any, self: any) => {
          const newMessage = <p><span style={{color : `${tags.color}`, fontWeight: '600'}}>{tags.username}</span>: {message}</p>;
          setChatting(prevChatting => [...prevChatting, newMessage])
          // "Alca: Hello, World!"
          //console.log(`${tags['display-name']}: ${message}`);
        });
      
        
        const ScrollDown = () => {
          const element: any = document.getElementById('ChatContainer');
          let Hauteur = element.scrollHeight;
          element.scrollTop = Hauteur;
      }
        const test = setInterval(() => ScrollDown(), 200)
        return () => {
          clearInterval(test)
        }
        
      }, [])

      return (
        <div style={{width: '98%', height: '70vh', border: '1px solid green'}} className='scroller' id='ChatContainer'>
        <ul style={{width: '100%', border: '1px solid skyblue'}}>
            {chatting.length === 0 ? 'Bienvenue sur le chat!' : 
              chatting.map((element: any, index: number) => (
              <li key={index}>{element}</li>
              ))}
        </ul>                 
    </div>
      )
}