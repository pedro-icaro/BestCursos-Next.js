import { Metadata } from "next";
import { title } from "process";
import Headercurso from "../../header-curso/page";
import Iniciarcurso from "../../iniciarcurso/page";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `Curso de ${id}`,
  };
}

export default async function Detalhescursos({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <div className="flex flex-col gap-5">
        <Iniciarcurso idClass="1" idCurso="1" imagemUrl="https://i.ytimg.com/vi/epDCjksKMok/hqdefault.jpg"/>
        <Headercurso />
      </div>
    </>
  );
}
