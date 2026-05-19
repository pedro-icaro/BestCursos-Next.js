import GrupoAulas from "@/app/src/components/player/grupo-aulas";

interface Props {
  params: Promise<{
    classId: string;
    courseId: string;

  }>;
}

export default async function PagePlayer({ params }: Props) {
  const { courseId, classId } = await params;

  return (
    <main className="flex flex-col gap-20">
      <GrupoAulas 
      
      position={1}
      title="Introdução e apresentação do curso"
      classes={[
        {
          done:true,
          play:false,
          title:"Curso de HTML5 - 00 - Site Completo - by Gustavo Guanabara"
        },        {
          done:true,
          play:false,
          title:"Curso de HTML5 - 01 - Site Completo - by Gustavo Guanabara"
        }, {
          done:false,
          play:true,
          title:"Curso de HTML5 - 02 - Site Completo - by Gustavo Guanabara"
        },
        {
          done:false,
          play:false,
          title:"Curso de HTML5 - 03 - Site Completo - by Gustavo Guanabara"
        }
      ]}
      />
      
    </main>
  );
}
