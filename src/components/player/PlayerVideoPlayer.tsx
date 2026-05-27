"use client";

import ReactPlayer from "react-player"

interface PropsVideoPlayer{
    videoId:string;
}

export default function PlayerVideoPlayer({videoId}:PropsVideoPlayer){
    return(
        <>
            <ReactPlayer src={`https://www.youtube.com/watch?v=${videoId}`} height={400} width={700}/>
        </>
    )
}