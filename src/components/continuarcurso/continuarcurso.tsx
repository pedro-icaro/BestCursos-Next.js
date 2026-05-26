import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

export default function ContinuarCurso() {
  return (
    <Link
      href={`/player/{courseId}/{classId}`}
      className="p-3 flex bg-olive-200 rounded-[10px] gap-2"
    >
      <div className="flex-1">
        <h1 className="text-[19px] line-clamp-1">Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara</h1>
        <p className="line-clamp-1">Curso de HTML5 Completo e GRÁTIS</p>
      </div>
      <div className="flex items-center gap-2">
       <span className="hidden md:block">Continuar Curso</span> 
        <MdPlayCircle size={23}/>
      </div>
    </Link>
  );
}
