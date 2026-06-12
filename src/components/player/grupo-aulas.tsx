"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import PlayerAula, { PropsPlayer } from "./aula";
import { useState } from "react";

export interface PropsGrupoAulas {
    title:string;
    PlayClassId:string;
    classes: (Pick<PropsPlayer,"done" | "title"> & {classId: string})[];

    onPlay:(classId:string) => void;
    onCheck:(classId:string) => void;
    
}
export default function GrupoAulas({classes,title,PlayClassId,onPlay,onCheck}: PropsGrupoAulas) {
  const [estado,setestado] = useState(false)
  
  return ( 
    <div className="flex flex-col gap-2 ">
      <button className="flex gap-2 p-4 bg-olive-200 items-center" onClick={() => setestado(!estado)}>
        <div className="flex flex-1 flex-col text-start">
          <span className="font-bold text-start line-clamp-1">{title} {classes.filter((classItem) => classItem.done).length}/{classes.length} Aulas</span>
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
  <li key={classItem.classId}>
    <PlayerAula
      {...classItem}
      play={classItem.classId === PlayClassId}
      onCheck={() => onCheck(classItem.classId)}
      onPlay={() => onPlay(classItem.classId)}
    />
  </li>
        ))}
      </ol>
    </div>
  );
}
