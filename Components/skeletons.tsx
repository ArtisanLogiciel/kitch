'use client';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';


export default function SkeletonLive(){
    return(
        <Skeleton variant="rounded" width={"100%"} height={"80%"} animation="wave" className='bg-[#efeff1]'/>
    )
} 