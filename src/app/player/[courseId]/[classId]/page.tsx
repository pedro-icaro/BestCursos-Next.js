import PlayerVideoPlayer from "@/components/player/player-class-details/components/PlayerVideoPlayer";
import PlayerClassDetails from "@/components/player/player-class-details/PlayerClassDetails";
import PlayerPlaylist from "@/components/playlist/PlayerPlaylist";
import { title } from "process";

interface Props {
  params: Promise<{
    classId: string;
    courseId: string;
  }>;
}

export default async function PagePlayer({ params }: Props) {
  const { courseId, classId } = await params;

  return (
    <main className="flex flex-col gap-2 h-[calc(100vh-64px)]">
      <div className="flex gap-8 h-full">
        <div className="flex-1 max-w-[480] h-[600]">
          <PlayerPlaylist
            PlayCourseId={courseId}
            PlayClassId={classId}
            classGroups={[
              {
                title: "Introdução e apresentação do curso",
                classes: [
                  {
                    done: true,
                    classId: "aula-01",
                    title:
                      "1-Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: true,
                    classId: "aula-02",
                    title:
                      "2-Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId: "aula-03",
                    title:
                      "3-Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId: "aula-04",
                    title:
                      "4-Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara",
                  },
                ],
              },
              {
                title: "Resolusões de atividades",
                classes: [
                  {
                    done: false,
                    classId: "aula-05",
                    title:
                      "5-Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId: "aula-06",
                    title:
                      "6-Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId: "aula-07",
                    title:
                      "7-Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId: "aula-08",
                    title:
                      "8-Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara",
                  },
                ],
              },
              {
                title: "Introdução e apresentação do curso",
                classes: [
                  {
                    done: true,
                    classId: "aula-01",
                    title:
                      "9-Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: true,
                    classId: "aula-02",
                    title:
                      "10-Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId: "aula-03",
                    title:
                      "11-Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId: "aula-04",
                    title:
                      "12-Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara",
                  },
                ],
              },
            ]}
          />
        </div>
        <PlayerClassDetails
          course={{
            title: "Curso de HTML5 Completo e GRÁTIS",
            classes:40,
            description:
              "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites A versão5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandesnavegadores compatíveis.",
          }}
          classitem={{description:"HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites A versão5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandesnavegadores compatíveis.", title:"Curso de HTML5 Completo e GRÁTIS"}}
        />
      </div>
    </main>
  );
}
