"use client";

import { useState } from "react";
import { LocalStorage } from "@/shared/services/local-storage";
import Section from "@/components/section/section";

export default function MeusCursosPagina() {
  const [favoritos] = useState(() => LocalStorage.Favoritos.get());

  if (favoritos.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-400">
        Você ainda não favoritou nenhum curso.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl p-1">Meus Cursos</h1>
      <Section
        items={favoritos.map(curso => ({
          title: curso.courseTitle,
          image: curso.courseImage,
          href: `/home/${curso.courseId}`,
        }))}
      />
    </div>
  );
}