import PlayerPlaylist from "@/app/src/components/playlist/PlayerPlaylist";

interface Props {
  params: Promise<{
    classId: string;
    courseId: string;
    
  }>;
}

export default async function PagePlayer({ params }: Props) {
  const { courseId, classId } = await params;

  return (
    <main className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="flex-1 max-w-[480]"> 
          <PlayerPlaylist 
            classGroups={[
              { 
                position: 1,
                title: "Introdução e apresentação do curso", 
                classes: [ 
                  {
                    done: true,
                    play: false,
                    title: "Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: true,
                    play: false,
                    title: "Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    play: true,
                    title: "Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    play: false,
                    title: "Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara",
                  },
                ]
              }
            ]}
          />
        </div>

        <div className="flex-1">Player {courseId} {classId}</div>
      </div>
    </main>
  );
}