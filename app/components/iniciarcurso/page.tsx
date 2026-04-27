import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IniciarProps {
    idClass:string;
    idCurso:string;
    imagemUrl:string;
}

export default function Iniciarcurso({idClass, idCurso, imagemUrl}:IniciarProps) {
  return (
    <div className=" bg-olive-200 p-5 rounded-[8] flex flex-col gap-5">
      <Link href={`/player/${idCurso}/${idClass}`} style={{backgroundImage: `url(${imagemUrl})` }}
      className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded"
      >
      <div className="w-full h-full flex items-center justify-center bg-olive-600 opacity-0 hover:opacity-80 transition">
        <MdPlayCircleOutline size={58} color="white"/>
      </div>
      </Link>
      <Link href={"teset"} className="bg-olive-400 p-2 rounded text-center font-semibold">Começar curso</Link>
    </div>
  );
}
