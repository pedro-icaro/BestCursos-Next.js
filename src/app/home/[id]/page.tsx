import MeusCursos from "@/app/meus-cursos/page";
import Headercurso from "../../../components/header-curso/header-curso";
import Iniciarcurso from "../../../components/iniciarcurso/iniciar-curso";
import ConteudoDasAulas from "@/components/conteudo-das-aulas/conteudo-das-aulas";
import { APIYoutube } from "@/shared/services/api-youtube";
import MeusCursosComponents from "@/components/meus-cursos/meuscursos";

export async function generateStaticParams() {
  const courses = await APIYoutube.course.getAll();
  return courses.map((course) => ({ id: course.id }));
}

export const revalidate = 86400;

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const curso = await APIYoutube.course.getById(id);

  return {
    title: curso ? curso.title : "Carregando Curso...",
  };
}

export default async function Detalhescursos({ params }: Props) {
  const { id } = await params;
  const curso = await APIYoutube.course.getById(id);
  const aulas = await APIYoutube.lessons.getByPlaylistId(id);

  if (!curso) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-white font-semibold">
        Ops! Esse curso não foi encontrado ou o ID da playlist é inválido.
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-20 md:w-auto left-0 text-white">
        <div>
          <MeusCursosComponents
            course={{
              courseId: curso.id,
              courseTitle: curso.title,
              courseImage: curso.image,
            }}
          />
        </div>
        <div className="flex-1">
          <Iniciarcurso
            title={curso.title}
            idClass={aulas[0]?.videoId || ""}
            idCurso={curso.id}
            imagemUrl={curso.image}
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 text-black">
          <Headercurso
            title={curso.title}
            description={curso.description}
            classes={aulas.length}
          />

          <ConteudoDasAulas
            classgroups={[
              {
                cursoId: curso.id,
                title: "Conteúdo do curso",

                classes: aulas.map((aula) => ({
                  id: aula.videoId,
                  title: aula.title,
                })),
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
