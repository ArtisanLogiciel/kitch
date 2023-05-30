'use client';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(){
    //Penser à faire le loading
    return (
        <div className=' w-full h-screen flex justify-center items-center'>
                <CircularProgress style={{color: 'black'}}/>
        </div>
        )
}
