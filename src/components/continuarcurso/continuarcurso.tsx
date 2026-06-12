"use client"

import { LocalStorage, PropsContinuarCurso } from "@/shared/services/local-storage";
import Link from "next/link";
import {  useState } from "react";
import { MdPlayCircle } from "react-icons/md";

export const Continuarcurso = () => {
 const [data, setData] = useState<PropsContinuarCurso | null>(() => {
  if (typeof window === "undefined") return null;
  return LocalStorage.ContinuarCurso.get();
});

  if (!data) return null;


  return (
    <Link
      href={`/player/${data.courseId}/${data.classId}`}
      className="p-3 flex bg-olive-50 border border-olive-100 rounded-[10px] gap-2"
    >
      <div className="flex-1">
        <h1 className="text-[19px] line-clamp-1">{data.className}</h1>
        <p className="line-clamp-1">{data.courseName}</p>
      </div>
      <div className="flex items-center gap-2">
       <span className="hidden md:block">Continuar Curso</span> 
        <MdPlayCircle size={23}/>
      </div>
    </Link>
  );
}
