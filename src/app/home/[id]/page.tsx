import Headercurso from "../../../components/header-curso/header-curso";
import Iniciarcurso from "../../../components/iniciarcurso/iniciar-curso";

import ConteudoDasAulas from "@/components/conteudo-das-aulas/conteudo-das-aulas";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `Curso de ${id}`,
  };
}

export default async function Detalhescursos({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-20 md:w-auto left-0">
        <div className="flex-1">
          <Iniciarcurso
            title="Curso de HTML5 Completo e GRÁTIS"
            idClass="1"
            idCurso="1"
            imagemUrl="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Headercurso
            title="Curso de HTML5 Completo e GRÁTIS"
            description="HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites.
        A versão5 da linguagem foi homologada e lançada a partir de 2009,
        mas
        só ganhou mercado no final de 2012 com o surgimento dos grandes
         navegadores compatíveis."
         classes="40 Aulas"
          />
          <ConteudoDasAulas
            classgroups={[
              {
                cursoId: "123",
                title: "Introdução e apresentação do curso",
                classes: [
                  {
                    id: "234",
                    title:
                      "Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    id: "235",
                    title:
                      "Curso de HTML5 - 01 - História da Internet - by Gustavo Guanabara",
                  },
                ],
              },
              {
                cursoId: "123",
                title: "Inicializando conteúdo",
                classes: [
                  {
                    id: "234",
                    title:
                      "Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    id: "235",
                    title:
                      "Curso de HTML5 - 01 - História da Internet - by Gustavo Guanabara",
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
