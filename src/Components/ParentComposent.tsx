"use client";

import * as React from 'react';
import StreamCard from './StreamCard';
import { GetVogue } from '@/utils/api';
import { LatestGamesStreams } from '@/utils/api';
import { GetStreamGamesOne } from '@/utils/api';
import { GetStreamGamesTwo } from '@/utils/api';
import { GetStreamGamesThree } from '@/utils/api';
import { GetCreative } from '@/utils/api';
import { GetCombat } from '@/utils/api';
import { GetPlatformAndGames } from '@/utils/api';
import { GetCarSimulation } from '@/utils/api';
import { GetSport } from '@/utils/api';
import { RecentlyGames } from "@/Components/RecentlyGames";
import { Categories } from './Categories';
import Footer from "@/Components/AmazonLogo";


export default function Global(){
    const [isLaoding, setIsLoading] = React.useState(false)
    const [isLoadingTwo, setIsLoadingTwo] = React.useState(false)
    const [isLoadingThree, setIsLoadingThree] = React.useState(false)
    const [isLoadingFour, setIsLoadingFour] = React.useState(false)
    
    React.useEffect(() => {
        const initialElements = document.querySelectorAll('.Observe');
        let elements = Array.from(initialElements);
           const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                    if(entry.isIntersecting === true){
                            if(index === 0){
                                setIsLoading(true)
                                const newElements = Array.from(document.querySelectorAll('.Observe'));
                                elements = elements.concat(newElements);
                                observer.disconnect(); // On arrête d'observer les éléments initiaux
                                observeNewElements(); // On commence à observer les nouveaux éléments
                            }
                            if(index === 1){
                                setIsLoadingTwo(true)
                                const newElements = Array.from(document.querySelectorAll('.Observe'));
                                elements = elements.concat(newElements);
                                observer.disconnect(); // On arrête d'observer les éléments initiaux
                                observeNewElements(); // On commence à observer les nouveaux éléments
                            }
                            if(index === 2){
                                setIsLoadingThree(true)
                                const newElements = Array.from(document.querySelectorAll('.Observe'));
                                elements = elements.concat(newElements);
                                observer.disconnect(); // On arrête d'observer les éléments initiaux
                                observeNewElements(); // On commence à observer les nouveaux éléments
                            }
                            if(index === 3){
                                setIsLoadingFour(true)
                            }
                        }
            });
          });
        
          const observeNewElements = () => {
            elements.forEach((element) => {
              observer.observe(element);
            });
          };
          observeNewElements();         
    }, [])

    return(
        <>
        <Categories />
        {isLaoding ? 
            <>
                <StreamCard 
                CallAPI={GetVogue} 
                title='Vogue' 
                Choice={false}
                PropsTags={true}
                />
                <RecentlyGames />
                <StreamCard 
                CallAPI={LatestGamesStreams} 
                title='Streams de jeux récemment sortis' 
                Choice={true}
                PropsTags={true}
                />
                 
            </>
            : null}
        {isLoadingTwo ? 
            <>
                <StreamCard 
                CallAPI={GetStreamGamesOne} 
                title='Discussion' 
                Choice={false}
                PropsTags={true}
                />
                <StreamCard 
                CallAPI={GetStreamGamesTwo} 
                title='League of Legends' 
                Choice={false}
                PropsTags={true}
                />
                <StreamCard 
                CallAPI={GetStreamGamesThree} 
                title='Fortnite' 
                Choice={false}
                PropsTags={true}
                /> 
            </>
            : null}
        {isLoadingThree ? 
            <>
              <StreamCard 
                CallAPI={GetCreative} 
                title='Créativité' 
                Choice={true}
                PropsTags={true}
                />
                <StreamCard 
                CallAPI={GetCombat} 
                title='Jeux de combat' 
                Choice={true}
                PropsTags={true}
                />
                <StreamCard 
                CallAPI={GetPlatformAndGames} 
                title='Jeux de cartes et de plateau' 
                Choice={true}
                PropsTags={true}
                />
            </>
            : null} 
        {isLoadingFour ? 
            <>
              <StreamCard 
                CallAPI={GetCarSimulation} 
                title='Simulations de course' 
                Choice={true}
                PropsTags={true}
                />
                <StreamCard 
                CallAPI={GetSport} 
                title='Jeux de sports' 
                Choice={true}
                PropsTags={false}
                />
              <Footer />
            </>
            : null}     
        </> 
    )
}