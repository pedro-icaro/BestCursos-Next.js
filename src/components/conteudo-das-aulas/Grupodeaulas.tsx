"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Aulas from "./Aulas";
import { useState } from "react";

export interface AulasProps {
  title: string;
  cursoId: string;
  classes: {
    id: string;
    title: string;
  }[];
}

export default function Grupodeaulas({ title, classes, cursoId }: AulasProps) {
  const [abre, setabre] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <button
          className="flex items-center gap-2 bg-olive-200 p-3 rounded"
          onClick={() => setabre(!abre)}
        >
          {abre === true ? ( 
            <MdKeyboardArrowDown size={24} />
          ) : (
            <MdKeyboardArrowRight size={24} />
          )}
          {title}
        </button>
        <ol data-abre={abre} className="flex flex-col data-[abre=false]:hidden mt-[-10]">
          {classes.map(({ id, title }) => (
            <li key={id}>
              <Aulas 
              title={title} 
              playerUrl={`/player/${cursoId}/${id}`} 
              />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
