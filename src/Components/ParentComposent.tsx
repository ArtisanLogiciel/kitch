"use client";

import * as React from 'react';
import { Vogue } from "@/Components/Vogue";
import { RecentlyGames } from "@/Components/RecentlyGames";
import { GamesLatest } from "@/Components/LatestGamesStreams";
import { Games_1 } from "@/Components/GamesOne";
import { Games_Two } from "@/Components/GamesTwo";
import { Games_3 } from "@/Components/GamesThree";
import { Creative } from "@/Components/Creative";
import { Fight } from "@/Components/Fight";
import { Platform } from "@/Components/PlatformAndGames";
import { CarSimulation } from "@/Components/Simulation";
import { Sports } from "@/Components/Sport";
import Footer from "@/Components/AmazonLogo";


export default function Global(){
    const [isLaoding, setIsLoading] = React.useState(false)
    const [isLoadingTwo, setIsLoadingTwo] = React.useState(false)
    const [isLoadingThree, setIsLoadingThree] = React.useState(false)
    const [isLoadingFour, setIsLoadingFour] = React.useState(false)

    React.useEffect(() => {
        //console.log(element)
        const handleScroll = () => {
        const isBottom = window.scrollY;
        const Height = window.innerHeight;
        console.log(isBottom)
        console.log(window.innerHeight)

          if(isBottom >= Height){
             setIsLoading(true)
          }
         if(isBottom >= (Height * 2.05)){
            setIsLoadingTwo(true)
         }
         if(isBottom >= (Height * 4.05)){
            setIsLoadingThree(true)
         }
         if(isBottom >= (Height * 6)){
            setIsLoadingFour(true)
         }
    };          
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <>
        {isLaoding ? 
            <>
                <Vogue />
                <RecentlyGames />
                <GamesLatest /> 
            </>
            : null}
        {isLoadingTwo ? 
            <>
                <Games_1 />
                <Games_Two />
                <Games_3 />  
            </>
            : null}
        {isLoadingThree ? 
            <>
              <Creative />
              <Fight />
              <Platform /> 
            </>
            : null} 
        {isLoadingFour ? 
            <>
              <CarSimulation />
              <Sports />
              <Footer />
            </>
            : null}     
        </> 
    )
}