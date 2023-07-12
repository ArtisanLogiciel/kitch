'use client';
import * as React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IconContext } from "react-icons";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { Cards } from './Cards';
import { useStreamDonnees } from './StreamCardContext';
//mport { API, API_STREAMS } from "@/types/api";


type PropsStreamCard ={
    CallAPI: any,
    title: string,
    Choice: boolean,
    PropsTags: boolean,
}

export default function StreamCard({CallAPI, title, Choice, PropsTags} : PropsStreamCard){
    const router = useRouter()
    const { setStreamCardData} = useStreamDonnees();
    const [data, setdata] = React.useState<any>(null)
    const [Button, setButton] = React.useState<any>(true)
    const [valeurIndex, setValeurIndex] = React.useState<number>(3)   

    React.useEffect(() => {
      CallAPI()
        .then((valeur: string[]) => {
          setdata(valeur)          
        })
        .catch((error: Error) => console.log(error));
    }, [CallAPI]);

    const HandleClick = () => {
          setStreamCardData(data)
    }
    
    return (
      <div>
        <h2 className={`text-lg 
                    m-2 font-[700]
                    ${title === 'Streams de jeux récemment sortis' ? 'Observe' : ''}
                    ${title === 'Jeux de cartes et de plateau' ? 'Observe' : ''}
                    ${title === 'Fortnite' ? 'Observe' : null}
                    `}>
          {Choice ? (
            <Link
              onClick={HandleClick}
              href={ `collection/${title}`}
              className="text-[#5c16c5] 
                    text-[18px] font-[550] 
                    hover:text-[#9147ff]
                    hover:underline"
            >
              {title}
            </Link>
          ) : (
            (title === "Vogue" ? <span>En Vogue</span> : null) ||
            (title !== "Chaînes lives" ? (
              <>
                Chaînes de{" "}
                <Link
                  href={`/directory/game/${title === 'Discussion' ? 'Just Chatting' : title}`}
                  className="text-[#5c16c5] 
                  text-[18px] font-[550] 
                  hover:text-[#9147ff]
                 
                  hover:underline"
                >
                  {title}
                </Link>{" "}
                <span>recommandées</span>
              </>
            ) : null) || (
              <>
                <Link
                  href="/"
                  className="text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline"
                >
                  {title}{" "}
                </Link>
                qui pourrait vous plaires
              </>
            )
          )}
        </h2>
        <div className="w-full flex flex-row flex-wrap items-center justify-between mb-[2%]">
          {!data ? (
            <div>chargement...</div>
          ) : (
            data.map(
              (element: any, index: number) =>
                index < valeurIndex && (
                  <Cards
                    key={index}
                    data={element}
                    profile_picture={element.user_id}
                    index={index}
                    tags={PropsTags}
                  />
                )
            )
          )}
          {Button ? (
            <div className=" w-full flex items-center justify-evenly">
              <div className="w-[40%]">
                <div className="h-[0.5px] w-full bg-[black]"></div>
              </div>
              <div className="w-[15%] ChangerC flex items-center justify-center group hover:bg-[#efeff1] hover:rounded">
                <button
                  className=" text-[14px] 
                            text-[#5c16c5] font-[550]
                            hover:bg-[#efeff1] hover:rounded"
                  onClick={() => {
                    if (!Choice) {
                      setValeurIndex(6);
                      setButton(false);
                    } else {
                        HandleClick();
                      return router.push(`collection/${title}`);
                    }
                  }}
                >
                  {!Choice ? "Afficher Plus" : "Afficher Tout"}
                </button>
                  {!Choice ? (
                      <IconContext.Provider
                          value={{ color: "#5c16c5", size: "17%"}}>
                          <MdOutlineKeyboardArrowDown />
                      </IconContext.Provider>
                  ) : (
                      <IconContext.Provider value={{ color: "#5c16c5", size: '17%'}}>
                          <MdOutlineKeyboardArrowRight />
                      </IconContext.Provider>
                  )}
              </div>
              <div className="w-[40%]">
                <div className="h-[0.5px] w-full bg-[black]"></div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
}







