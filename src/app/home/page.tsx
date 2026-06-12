import { Metadata } from "next";
import Section from "../../components/section/section";
import { APIYoutube } from "@/shared/services/api-youtube";
import { Continuarcurso } from "@/components/continuarcurso/continuarcurso";

export const metadata: Metadata = {
  title: "Dev-Pro",
};
export default async function home() {
  const courses = await APIYoutube.course.getAll();

  return (
    <>
      <div>
        <div className=" flex flex-col gap-2">
          <Continuarcurso />
          <h1 className="font-bold text-3xl p-1">Mais Relevantes</h1>
          <Section
            items={courses.map((course) => ({
              title: course.title,
              image: course.image,
              href: `/home/${course.id}`,
              description: course.description,
            }))}
          />
        </div>

        <h1 className="font-bold text-3xl p-3">Recomendados</h1>

        <Section
          items={courses.map((course) => ({
            title: course.title,
            image: course.image,
            href: `/home/${course.id}`,
            description: course.description,
          }))}
        />
      </div>
    </>
  );
}
