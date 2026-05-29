"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

interface PropsVideoPlayer{
    videoId:string;
}

export default function PlayerVideoPlayer({videoId}:PropsVideoPlayer){    
    return(
        <>
            <ReactPlayer  
            src={`https://www.youtube.com/watch?v=${videoId}`} 
            height={400} 
            width={700}
            controls={true}
            />
        </>
    )
}