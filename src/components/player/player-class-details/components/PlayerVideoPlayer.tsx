"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface PropsVideoPlayer {
  videoId: string;
}

export default function PlayerVideoPlayer({ videoId }: PropsVideoPlayer) {    
  return (
    <div className="w-full h-full relative">
      <ReactPlayer  
        src={`https://www.youtube.com/watch?v=${videoId}`} 
        width="100%" 
        height="100%" 
        controls={true}
        className="absolute top-0 left-0" 
      />
    </div>
  );
}