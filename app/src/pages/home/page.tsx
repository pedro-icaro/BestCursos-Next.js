import { Metadata } from "next";
import Section from "../../components/section/section";
import Card from "../../components/card/card";
import ContinuarCurso from "../../components/continuarcurso/continuarcurso";


export const metadata: Metadata = {
  title: "Dev-Pro",

};
export default function home() {
  return (
    <>
      <div>
        <ContinuarCurso />
        <h1 className="font-bold text-3xl p-1">Mais Relevantes</h1>
        <Section />
        <br />
        <h1 className="font-bold text-3xl p-3">Recomendados</h1>
        <div className="flex gap-3 relative overflow-hidden overflow-x-auto  -mr-4">
          <Card
            capa="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
            descricao=" HTML5 é uma linguagem de marcação hipertexto utilizada para criarsites. A versão 5 da linguagem foihomologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dosgrandes navegadores compatíveis."
            titulocard="Curso Html 5"
            href="home/123"
          />

          <Card
            capa="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
            descricao=" HTML5 é uma linguagem de marcação hipertexto utilizada para criarsites. A versão 5 da linguagem foihomologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dosgrandes navegadores compatíveis."
            titulocard="Curso Html 5"
            href="home/123"
          />
        </div>
      </div>
    </>
  );
}
