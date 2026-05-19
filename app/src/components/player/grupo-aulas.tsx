"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import PlayerAula, { PropsPlayer } from "./aula";
import { useState } from "react";

interface PropsGrupoAulas {
    position:number;
    title:string;
    
    classes: PropsPlayer[];
    
}
export default function GrupoAulas({classes,position,title}: PropsGrupoAulas) {
  const [estado,setestado] = useState(false)
  
  return (
    <div className="flex flex-col gap-2 p-4">
      <button className="flex gap-2 p-4 bg-olive-200 items-center" onClick={() => setestado(!estado)}>
        <div className="flex bg-olive-400 h-12 w-12 rounded-full items-center justify-center">
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
      <ol data-estado={estado} className="flex flex-col data-[estado=false]:hidden">
        {classes.map(classItem => (
          <li key={classItem.title}>
          <PlayerAula 
          {...classItem}
          />
        </li>
        ))}
      </ol>
    </div>
  );
}
