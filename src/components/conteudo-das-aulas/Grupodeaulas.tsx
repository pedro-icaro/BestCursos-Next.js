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
  return (
    <>
      <div className="flex flex-col gap-5">
      <div className="flex flex-col p-4 bg-olive-200 shrink-0">
        <h3 className=" text-lg">Conteúdo do curso</h3>
      </div>
        <ol  className="flex flex-col  mt-[-10]">
          {classes.map(({ id, title }) => (
            <li key={id} >
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
