'use client';

import { Cards } from "@/Components/Cards";
import * as React from 'react'
import { useStreamDonnees } from "@/Components/StreamCardContext";
import { useParams } from "next/navigation";

export default function Page() {
    const {titre} = useParams()
    const {streamCardData}  = useStreamDonnees();

    React.useEffect(() => {
        if(streamCardData) {
          // Les données sont disponibles, vous pouvez effectuer des actions ici
          console.log(streamCardData)
        }
      }, [streamCardData]);
    return (
        <div>
            <h2 className=" text-[32px] font-[600]">{decodeURIComponent(titre)}</h2>
                Description
            <div className="w-full flex flex-row flex-wrap items-center justify-between mb-[2%]">
                  {!streamCardData ? (
            <div>chargement...</div>
          ) : (
            streamCardData.map(
              (element: any, index: number) =>
                  <Cards
                    key={index}
                    data={element}
                    profile_picture={element.user_id}
                    index={index}
                    tags={true}
                  />   
            )
          )}
            </div>
        </div>  
)}


