import PlayerVideoPlayer from "@/components/player/PlayerVideoPlayer";
import PlayerPlaylist from "@/components/playlist/PlayerPlaylist";

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
      <div className="flex gap-2 h-full">
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
                    title: "Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: true,
                    classId:"aula-02",
                    title: "Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                  classId:"aula-03",
                    title: "Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId:"aula-04",
                    title: "Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara",
                  },
                ]
              },              { 
                title: "Resolusões de atividades", 
                classes: [ 
                  {
                    done: false,
                    classId:"aula-05",
                    title: "Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId:"aula-06",
                    title: "Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                  classId:"aula-07",
                    title: "Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId:"aula-08",
                    title: "Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara",
                  },
                ]
              }, { 

                title: "Introdução e apresentação do curso", 
                classes: [ 
                  {
                    done: true,
                    classId: "aula-01",
                    title: "Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: true,
                    classId:"aula-02",
                    title: "Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                  classId:"aula-03",
                    title: "Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara",
                  },
                  {
                    done: false,
                    classId:"aula-04",
                    title: "Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara",
                  },
                ]
              },  
            ]}
          />
        </div>

        <div className="flex-1"><PlayerVideoPlayer videoId="epDCjksKMok"/></div>
      </div>
    </main>
  );
}