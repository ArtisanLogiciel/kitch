'use client';
import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { LatestGamesStreams } from '@/utils/api';
import { Cards } from './Cards';


export function GamesLatest(){
    const [dataLGames, setDataLGames] = React.useState<any>(null)

    React.useEffect(() => {
        LatestGamesStreams()
        .then(valeur => setDataLGames(valeur))
        .catch(error => console.log(error))
    
    }, [])
    return (
      <>
        <div>
          <h2 className="text-lg font-medium mt-[2%]">
            <Link
              href="/"
              className="text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline"
            >
              Streams de jeux récemment sortis{" "}
            </Link>
          </h2>
          <div className="w-full flex flex-row flex-wrap items-center justify-between mb-[2%]">
            {!dataLGames ? (
              <div>chargement...</div>
            ) : (
              dataLGames.map((element: any, index: number) => <Cards key={index} data={element} />)
            )}
            <div className=" w-full flex items-center justify-evenly">
              <div className="w-[40%]">
                <div className="h-[0.5px] w-full bg-[black]"></div>
              </div>
              <div className="w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded">
                <button className=" text-[14px] text-[#5c16c5] font-[550] hover:text-[black] hover:bg-[#efeff1] hover:rounded">
                  Afficher Tout
                </button>
                <KeyboardArrowRightIcon sx={{ color: "#5c16c5" }} />
              </div>
              <div className="w-[40%]">
                <div className="h-[0.5px] w-full bg-[black]"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}