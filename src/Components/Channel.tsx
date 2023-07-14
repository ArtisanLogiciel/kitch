"use client";

import React from 'react'       // Pas necessoire ???
import Skeleton from "@mui/material/Skeleton";

import Image from "next/image";
import Link from 'next/link';

// React Icones
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FaHandPaper, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

import { MdOutlineIosShare } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsPerson, BsDot, BsThreeDotsVertical } from 'react-icons/bs'

import { useParams } from "next/navigation";

// Types
import { API, API_USERS, API_CHANNELS, API_USERFOLLOWERS, API_TEAMS } from "@/types/api";

// Utils
import { getUser, getChannel, getFollowers, getTeams } from "@/utils/api";
import { toHoursAndMinutes } from "@/utils/toHoursAndMinutes";

import { default as _ReactPlayer } from "react-player/lazy";
// Pourquoi default ???
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

type ChannelProps = {
    viewer: number,
    timeSecondes: number
};

export default function Channel({ viewer = 0, timeSecondes = 0 }: ChannelProps) {
    const [dataUser, setDataUser] = React.useState<API<API_USERS[]>>(null);
    const [dataChannel, setDataChannel] = React.useState<API<API_CHANNELS[]>>(null);
    const [dataFollowers, setDataFollowers] = React.useState<API<API_USERFOLLOWERS>>(null);
    const [followers, setFollowers] = React.useState<API<API_USERFOLLOWERS>>(null);
    const [dataTeams, setDataTeams] = React.useState<API<API_TEAMS[]>>(null);
    const [error, setError] = React.useState<any>(null);

    const params = useParams();
    const userLogin = params.userLogin

    const [online, setOnline] = React.useState<boolean>(true);

    const { h, m, s } = toHoursAndMinutes(timeSecondes);

    React.useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async (): Promise<void> => {
            try {
                const dataUser = await getUser(userLogin);
                setDataUser(dataUser);

                if (dataUser) {

                    const channelUser1 = await getChannel(dataUser[0].id);
                    setDataChannel(channelUser1)

                    const followersUser1 = await getFollowers(dataUser[0].id);
                    setDataFollowers(followersUser1)
                    const teamsUser1 = await getTeams(dataUser[0].id);
                    setDataTeams(teamsUser1)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        }
    }, [userLogin]);


console.log("--dataTeams--", dataTeams);

    let teamName: string | Date = ''

    if (dataUser) {
      
        // if (dataTeams) {  
        //     let date = 0

        //     dataTeams.map((team, index) => {
        //         const updated_atTS = Date.parse(team.updated_at);       // timestamp
        //         console.log(index, ' => ', updated_atTS);
        //         if (updated_atTS > date) { date = updated_atTS };
        //     })
        // }      


        // On affiche la team mise à jour le plus récemment
        if (dataTeams) {
            let date = 0;

            dataTeams.map((team) => {

                if (Date.parse(team.updated_at) > date) {
                    date = Date.parse(team.updated_at)
                    teamName = team.team_display_name
                }
            })
        }
    }

    return (
        <div className="flex flex-row">
            {!(dataUser && dataChannel) ? (
                <Skeleton
                    variant="rounded"
                    width={"100%"}
                    height={"80%"}
                    animation="wave"
                    style={{ backgroundColor: "#efeff1" }}
                />
            ) : (
                <div className=' w-full'>
                    <ReactPlayer
                        url={`https://www.twitch.tv/${userLogin}`}
                        className="w-full"
                        width={"100%"}
                        height={"500px"}
                        controls
                    />
                    <div className='flex justify-between mt-2 '>
                        <div className='flex relative w-[10%] mt-[1rem] mx-[1rem] '>
                            <Image
                                src={dataUser[0].profile_image_url}
                                width={70}
                                height={70}
                                alt="avatar"
                                className='rounded-full'
                            />
                            <div className=" bg-[#eb0400] text-[white] rounded absolute bottom-0 left-[20%] border border-white px-1 w-[50%] text-sm">
                                LIVE
                            </div>
                        </div>
                        <div className=' w-[45%]'>
                            <p className='font-bold'>{dataUser[0].display_name} </p>
                            <p className='font-bold'>{dataChannel[0].title}</p>
                            <div className='flex items-center'>
                                <Link
                                    href={`/directory/game/${dataChannel[0].game_name}`}
                                    className="text-[#9147ff]">
                                    {dataChannel[0].game_name}
                                </Link>
                                <div className='text-[#5f5f5f] text-sm hidden md:flex'>
                                    {dataChannel[0].tags.map((tag, index) => <p key={index} className=" bg-[#e6e6e6] rounded-full px-2 m-2">{tag}</p>)}
                                </div>
                            </div>
                        </div>
                        <div className=' w-[45%]'>
                            <div className='flex justify-end'>
                                {online ?
                                    <button className="flex text-[#9147ff] hover:text-black hover:bg-[#cacaca] rounded-md items-center p-1 mr-4 font-bold">
                                        <FaHandPaper className='pr-1' />
                                        Réagir
                                    </button>
                                    :
                                    null
                                }
                                <button className="flex text-[#ffffff] bg-[#9147ff] hover:bg-[#451093] rounded-md items-center p-1 mr-4 font-bold">
                                    <AiOutlineHeart className='pr-1' />
                                    Suivre
                                </button>
                                <button className="flex bg-[#e9e9e9] hover:bg-[#cacaca] rounded-md items-center p-1 font-bold">
                                    <AiOutlineStar className='pr-1' size='1.5rem' />
                                    {"S'abonner"}
                                    <IoIosArrowDown className='pl-1' size='1.5rem' />
                                </button>
                            </div>
                            <div className='flex items-center justify-end mt-3'>
                                {online ?
                                    <div className='flex items-center text-sm'>
                                        <BsPerson className=' text-[#971311] font-bold' size='1.1rem' />
                                        <p className=' text-[#971311] mr-4 font-bold'>{viewer}</p>
                                        <p className='mr-4'>
                                            {h < 10 ? `0${h}` : h}:{m < 10 ? `0${m}` : m }:{s < 10 ? `0${s}` : s }
                                        </p>
                                    </div>
                                    :
                                    null
                                }
                                <p>
                                    <MdOutlineIosShare className=' mr-4' />
                                </p>
                                <p>
                                    <BsThreeDotsVertical />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Encadré USER */}
                    <div className='flex justify-between bg-white p-10 mt-5'>
                        <div>
                            <p className='font-bold text-lg'>Concernant {dataUser[0].display_name}</p>
                            <div className='flex'>
                                {dataFollowers ?
                                    <p>
                                        {/* On arrondit par ex : 1200 => 1.2 k // 650952 => 650 k // 3999999 => 4 M  */}
                                        <span className='font-bold mr-1'>
                                            {(dataFollowers.total > 999_999) ?
                                                Math.round(dataFollowers.total / 1_000_000) + ' M'
                                                :
                                                dataFollowers.total > 999 ?
                                                    Math.round(dataFollowers.total / 100) / 10 + ' k'
                                                    :
                                                    dataFollowers.total
                                            }
                                        </span>
                                        <span className='text-[#53535f]'>
                                            followers
                                        </span>
                                    </p>
                                    :
                                    null
                                }
                                {dataTeams
                                    ?
                                    <div className='flex'>
                                        <BsDot />
                                        {teamName != ""
                                            ?
                                            <p className=' font-bold'>{teamName}</p>
                                            :
                                            null
                                        }
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <p>{dataUser[0].description}</p>
                        </div>
                        <div className='text-sm text-[#53535f] pr-7'>
                            <p className='flex mt-2'>
                                <FaTwitter className='mr-1' />
                                Twitter
                            </p>
                            <p className='flex mt-2'>
                                <FaInstagram className='mr-1' />
                                Instagram
                            </p>
                            <p className='flex mt-2'>
                                <FaYoutube className='mr-1' />
                                Youtube
                            </p>
                            <p className='flex mt-2'>
                                <FaYoutube className='mr-1' />
                                Replays
                            </p>
                            <p className='flex mt-2'>
                                <FaTiktok className='mr-1' />
                                TikTok
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
