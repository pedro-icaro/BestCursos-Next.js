"use client";

import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer"

interface IniciarProps {
    title:string;
    idClass:string;
    idCurso:string;
    imagemUrl:string;
}

export default function Iniciarcurso({idClass, idCurso, imagemUrl,title}:IniciarProps) {
  const [ref, InView] = useInView({threshold: 0.1, initialInView: true });
  return (
    <>
    <div ref={ref} className=" bg-olive-200 p-5 rounded-[8] flex flex-col gap-5 md:w-100 md:fixed">
      <Link href={`/player/${idCurso}/${idClass}`} style={{backgroundImage: `url(${imagemUrl})` }}
      className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded"
      >
      <div className="w-full h-full flex items-center justify-center bg-olive-600 opacity-0 hover:opacity-80 transition">
        <MdPlayCircleOutline size={58} color="white"/>
      </div>
      </Link>
      <Link href={"teset"} className="bg-olive-400 p-2 rounded text-center font-semibold">Começar curso</Link>
    </div>
    {!InView &&
      <div className=" bg-olive-200 fixed right-0 left-0 top-20 p-5 flex flex-col items-center gap-2 rounded-[5]">
         <h1 className=" font-bold text-xl">{title}</h1>
               <Link href={"teste"} className="bg-olive-400 p-2 w-full rounded text-center font-semibold">Começar curso</Link>

      </div>
    }
    </>
  );
}
