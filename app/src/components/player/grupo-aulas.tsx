import { MdKeyboardArrowRight } from "react-icons/md";
import PlayerAula from "./aula";

interface PropsGrupoAulas {
    
}
export default function GrupoAulas({}: PropsGrupoAulas) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex gap-2 p-4 bg-olive-200 items-center">
        <div className="flex bg-olive-400 h-12 w-12 rounded-full items-center justify-center">
          1
        </div>
        <div className="flex flex-1 flex-col">
          <span>
            Introdução e apresentação do curso
          </span>
          <span>0/2 Aulas</span>{" "}
        </div>
        <MdKeyboardArrowRight size={24} />
      </div>
      <PlayerAula
        title="Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara"
        play
        done={false}
      />
      <PlayerAula
        title="Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara"
        play
        done={false}
      />
    </div>
  );
}
