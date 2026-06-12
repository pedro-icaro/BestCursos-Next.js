import { APIYoutube } from "@/shared/services/api-youtube";
import Card from "@/components/card/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos - Dev-Pro",
};

export const revalidate = 86400;

export default async function Cursos() {
  const courses = await APIYoutube.course.getAll();

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="font-bold text-3xl">Todos os Cursos</h1>
      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            image={course.image}
            href={`/home/${course.id}`}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}