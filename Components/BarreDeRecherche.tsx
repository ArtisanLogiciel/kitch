'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';


export default function BarreDeRecherche() {
    const [recherche, setRecherche] = React.useState<any>('')
    const router = useRouter();
    const Envoyer = () => {
        console.log(recherche)
        router.push(`/recherche/${recherche}`)
    }
    const handleKeyPress = (e: any) => {
        if (e.keyCode === 13) {
            router.push(`/recherche/${recherche}`)
        }
      }
 
  return (
    <AppBar position="fixed" sx={{
        width: '100%',
        height: '9vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: 'black',
    }}>
        <div className='border-2 border-solid border-transparent w-[15%] h-[100%] flex items-center justify-evenly flex-row flex-nowrap'>
            <div className='hover:cursor-pointer flex items-center justify-center h-[100%] w-[25%]' onClick={() => router.push(`/`)}>
                <img alt="logo twitch" src="/Twitch-icon-purple.png" className='h-[28px] w-[24px]'></img>
            </div>
            <div className='flex items-center justify-center h-[100%] w-[50%]'>
                <p className='text-[14px] font-[500] hover:text-[#5c16c5] hover:cursor-pointer'>Parcourir</p>
            </div>
             <div className='flex w-[25%] h-[100%] flex-col flex-wrap justify-center items-center'>
                    <div className="w-[4px] h-[4px] mb-[2px] rounded-full bg-[black]"></div>
                    <div className="w-[4px] h-[4px] mb-[2px] rounded-full bg-[black]"></div>
                    <div className="w-[4px] h-[4px] mb-[2px] rounded-full bg-[black]"></div>
             </div>
        </div>
        <div className='border-2 border-solid border-transparent w-[31%] h-full flex items-center justify-center'>
            <div className='w-full flex items-center justify-between'>
                <input 
                type="search"
                value={recherche}
                placeholder="Rechercher"
                onChange={e  => setRecherche(e.target.value)}
                className='w-[90%] border border-solid border-black rounded-[5px_0px_0px_5px] relative z-[9] h-[6vh] focus:outline-4 focus:outline focus:outline-[#772ce8] focus:border-0'
                onKeyDown={handleKeyPress}
                 />
                <button type="button" className='w-[10%] rounded-[0px_5px_5px_0px] h-[5.5vh] relative z-[3] bg-[#efeff1] border-0' onClick={Envoyer}><svg width="80%" height="80%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" data-a-selector="tw-core-button-icon" className="ScIconSVG-sc-1q25cff-1 dSicFr"><g><path fillRule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clipRule="evenodd"></path></g></svg></button>
            </div>
        </div>

        <div className='border-2 border-solid border-transparent w-[23%] h-full flex justify-between items-center flex-nowrap'>
       
       <svg width="3.5vw" height="3.5vh" viewBox="0 0 20 20"><path fillRule="evenodd" d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z" clipRule="evenodd"></path></svg>
        <button className="w-[8vw] h-[5vh] bg-[#efeff1] rounded border-0">Se Connecter</button>
        <button className="h-[5vh] w-[6vw] rounded text-[white] bg-[#9147ff] border-0"> S'inscrire</button>
        <svg width="3.5vw" height="3.5vh" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" clipRule="evenodd"></path></svg>
        </div>
      </AppBar>
  )
}

