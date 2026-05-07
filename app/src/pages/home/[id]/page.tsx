
import Headercurso from "../../../components/header-curso/page";
import Iniciarcurso from "../../../components/iniciarcurso/page";

import ConteudoDasAulas from "@/app/src/components/conteudo-das-aulas/conteudo-das-aulas";

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
  const {id} = await params;

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-5 md:w-auto left-0">
        <div className="flex-1">
          <Iniciarcurso
            title="Curso de HTML5 Completo e GRÁTIS"
            idClass="1"
            idCurso="1"
            imagemUrl="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Headercurso />
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
