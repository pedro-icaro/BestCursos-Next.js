import PlayerClassDetails from "@/components/player/player-class-details/PlayerClassDetails";
import PlayerPlaylist from "@/components/playlist/PlayerPlaylist";
import { APIYoutube } from "@/shared/services/api-youtube";

interface Props {
  params: Promise<{
    classId: string;
    courseId: string;
  }>;
}

export default async function PagePlayer({ params }: Props) {
  const { courseId, classId } = await params;
  const videos = await APIYoutube.lessons.getByPlaylistId(courseId);
  const aula = await APIYoutube.course.getById(classId);

  return (
    <main className="flex flex-col gap-4 lg:gap-2 h-auto lg:h-50 p-2 lg:p-0">
      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 h-auto lg:h-[530px]">
        <div className="w-full lg:flex-1 lg:max-w-[480px] lg:h-[520px]">
          <PlayerPlaylist
            PlayCourseId={courseId}
            PlayClassId={classId}
            classGroups={[
              {
                title: "Conteúdo",
                classes: videos.map((video) => ({
                  done: false,
                  classId: video.videoId,
                  title: video.title,
                })),
              },
            ]}
          />
        </div>

        <div className="w-full lg:flex-1 lg:overflow-x-auto">
          <PlayerClassDetails
            course={{
              title: "Curso de HTML5 Completo e GRÁTIS",
              classes: 40,
              description:
                "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
            }}
            classitem={{
              description:
                "Curso de HTML5 + CSS3 + JavaScript completamente gratuito. Aulas criadas pelo professor Gustavo Guanabara. \r\n\r\nDownload do pacote de arquivos para a criação do site disponível em http://cursoemvideo.com/cursos/curso-html5-gratis-completo/",
              title: "Curso de HTML5 Completo e GRÁTIS",
            }}
          />
        </div>
      </div>
    </main>
  );
}
