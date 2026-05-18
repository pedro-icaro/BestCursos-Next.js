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
      <GrupoAulas />
      
    </main>
  );
}
