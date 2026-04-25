import { FaShareNodes } from "react-icons/fa6";

export default function Headercurso() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className=" font-bold text-xl">Curso de HTML5 Completo e GRÁTIS</h1>
      <p>HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. <br />A versão5 da linguagem foi homologada e lançada a partir de 2009, mas <br />só ganhou mercado no final de 2012 com o surgimento dos grandes <br /> navegadores compatíveis.</p>
      <div className="flex gap-2 items-center">
        
        <button className="flex py-2 px-4 rounded-3xl bg-olive-200 items-center gap-2"><FaShareNodes />Compartilha</button>
        <span>40 Aulas</span>
      </div>
    </div>
  );
}
