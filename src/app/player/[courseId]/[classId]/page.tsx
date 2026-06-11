import PlayerClassDetails from "@/components/player/player-class-details/PlayerClassDetails";
import PlayerPlaylist from "@/components/playlist/PlayerPlaylist";
import { APIYoutube } from "@/shared/services/api-youtube";

interface Props {
  params: Promise<{
    classId: string;
    courseId: string;
  }>;
}

export async function generateStaticParams() {
  const courses = await APIYoutube.course.getAll();
  const rotasEstaticas = [];

  for (const course of courses) {
    const lessons = await APIYoutube.lessons.getByPlaylistId(course.id);
    for (const lesson of lessons) {
      rotasEstaticas.push({
        courseId: course.id,
        classId: lesson.videoId,
      });
    }
  }

  return rotasEstaticas;
}

export default async function PagePlayer({ params }: Props) {
  const { courseId, classId } = await params;

  const [videos, cursoDetails, staticsvideo, listaDeComentarios] = await Promise.all([
    APIYoutube.lessons.getByPlaylistId(courseId),
    APIYoutube.course.getById(courseId),
    APIYoutube.video.getStatsById(classId),
    APIYoutube.video.getComments(classId)
  ]);

  const aulaAtual = videos.find((video) => video.videoId === classId) || videos[0];

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
              id: courseId,
              title: cursoDetails?.title || "",
              classes: videos.length,
              description: cursoDetails?.description || "",
            }}
            classitem={{
              id: classId,
              videoId: aulaAtual?.videoId || "",
              title: aulaAtual?.title || "",
              description: aulaAtual?.description || "",
              viewsCount: staticsvideo.viewsCount,
              likesCount: staticsvideo.likesCount,
              commentsCount: staticsvideo.commentsCount,
            }}
            comments={listaDeComentarios}
          />
        </div>
      </div>
    </main>
  );
}