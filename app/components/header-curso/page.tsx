"use client";

import { useState } from "react";
import { FaShareNodes } from "react-icons/fa6";
import Compartilhar from "./botao-compartilhar/page";

export default function Headercurso() {
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
      <h1 className=" font-bold text-xl">Curso de HTML5 Completo e GRÁTIS</h1>
      <p className={x === 1 ? "" : "line-clamp-3"}>
        HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites.
        <br />A versão5 da linguagem foi homologada e lançada a partir de 2009,
        mas <br />
        só ganhou mercado no final de 2012 com o surgimento dos grandes
        <br /> navegadores compatíveis.
      </p>
      <button onClick={vermais} className=" w-16 underline flex gap-1">
        <span>Ver</span>{b} 
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
        <span>40 Aulas</span>
      </div>
    </div>
  );
}
