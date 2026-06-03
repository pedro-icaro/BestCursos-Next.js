import { Metadata } from "next";
import Section from "../../components/section/section";
import Card from "../../components/card/card";
import ContinuarCurso from "../../components/continuarcurso/continuarcurso";
import { APIYoutube } from "@/shared/services/api-youtube";

export const metadata: Metadata = {
  title: "Dev-Pro",
};
export default async function home() {
  const courses = await APIYoutube.course.getAll();

  return (
    <>
      <div>
        <ContinuarCurso />
        <h1 className="font-bold text-3xl p-1">Mais Relevantes</h1>
        <Section
          items={courses.map((course) => ({
            title: course.title,
            image: course.image,
            href: `/home/${course.id}`,
            description: course.description,
          }))}
        />
        <br />
        <h1 className="font-bold text-3xl p-3">Recomendados</h1>
        <div className="flex gap-3 relative overflow-hidden overflow-x-auto  -mr-4">
          <Section
            items={courses.map((course) => ({
              title: course.title,
              image: course.image,
              href: `/home/${course.id}`,
              description: course.description,
            }))}
          />
        </div>
      </div>
    </>
  );
}
