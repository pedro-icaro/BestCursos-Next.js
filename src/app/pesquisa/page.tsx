import { APIYoutube } from "@/shared/services/api-youtube";
import Section from "@/components/section/section";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function PesquisaPage({ searchParams }: Props) {
  const { q } = await searchParams;

  if (!q) {
    return <p className="text-center mt-10 text-gray-400">Digite algo para pesquisar.</p>;
  }

  const courses = await APIYoutube.course.getAll();

  const resultados = courses.filter(course =>
    course.title.toLowerCase().includes(q.toLowerCase()) ||
    course.description?.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold text-2xl">
        Resultados para: <span className="text-olive-600">{q}</span>
      </h1>

      {resultados.length === 0 ? (
        <p className="text-gray-400 mt-4">Nenhum curso encontrado.</p>
      ) : (
        <Section
          items={resultados.map(course => ({
            title: course.title,
            image: course.image,
            href: `/home/${course.id}`,
            description: course.description,
          }))}
        />
      )}
    </div>
  );
}