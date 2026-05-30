"use client";

import { useState } from "react";
import { FaShareNodes } from "react-icons/fa6";
import Compartilhar from "./botao-compartilhar/botao-compartilhar";
  interface headercurso {
    title:string;
    description:string;
    classes:number;
  }
export default function Headercurso({title,description,classes}:headercurso) {
  const [x, setx] = useState(0);
  const [b, setb] = useState("mais");

  function vermais() {
    setx(x + 1);
    setb("menos");
    if (x === 1) {
      setx(0);
      setb("mais");
    } else { 
    }
  }



  return (
    <div className="flex flex-col gap-2">
      <h1 className=" font-bold text-xl">{title}</h1>
      <p className={x === 1 ? "" : "line-clamp-3"}>
        {description}
      </p>
      <button onClick={vermais} className=" w-16 underline flex gap-1">
        <p>Ver</p>{b} 
      </button>

      <div className="flex gap-2 items-center">
        <Compartilhar title = "Copie o conteúdo:" content = "https://github.com/pedro-icaro/BestCursos-Next.js">
          <button 
          className="flex py-2 px-4 rounded-3xl bg-olive-200 items-center 
          gap-2 outline-none"
          >
            <FaShareNodes />
            Compartilha
          </button>
        </Compartilhar>
        <p>{classes} Aulas</p>
      </div>
    </div>
  );
}
