'use client';

import { Cards } from "@/Components/Cards";
import * as React from 'react'
//import { useStreamDonnees } from "@/Components/StreamCardContext";
import { useParams } from "next/navigation";

export default function Page() {
  const {titre} = useParams()
  const storedStreamCardData = sessionStorage.getItem('streamCardData');
  const NewData = storedStreamCardData ? JSON.parse(storedStreamCardData) : null;
  const [streamCardData]  = React.useState(NewData)
  
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


