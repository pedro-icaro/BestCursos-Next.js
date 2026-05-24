"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import PlayerAula, { PropsPlayer } from "./aula";
import { useState } from "react";

export interface PropsGrupoAulas {
    position:number;
    title:string;
    PlayClassId:string;
    classes: (Pick<PropsPlayer,"done" | "title"> & {classId: string})[];

    onPlay:(classId:string) => void;
    onCheck:(classId:string) => void;
    
}
export default function GrupoAulas({classes,position,title,PlayClassId,onPlay,onCheck}: PropsGrupoAulas) {
  const [estado,setestado] = useState(false)
  
  return ( 
    <div className="flex flex-col gap-2 ">
      <button className="flex gap-2 p-4 bg-olive-200 items-center" onClick={() => setestado(!estado)}>
        <div className="flex bg-olive-400 text-white h-12 w-12 rounded-full items-center justify-center">
          {position}
        </div>
        <div className="flex flex-1 flex-col text-start">
          <span className="font-bold text-start line-clamp-1">{title}</span>
          <span className="text-sm font-light">{classes.filter((classItem) => classItem.done).length}/{classes.length} Aulas</span>{" "}
        </div>
        {estado === false 
        ?
        <MdKeyboardArrowRight size={24} />
        :
        <MdKeyboardArrowDown size={24}/>
      }
      </button>
      <ol data-estado={estado} 
      className="flex flex-col data-[estado=false]:hidden">
        {classes.map(classItem => (
          <li key={classItem.title}>
          <PlayerAula 
          {...classItem}
          play={(classItem.classId === PlayClassId)}
          onCheck={() => onCheck(classItem.classId)}
          onPlay={() => onPlay(classItem.classId)}
          />
        </li>
        ))}
      </ol>
    </div>
  );
}
