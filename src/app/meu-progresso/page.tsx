"use client";

import { useState } from "react";
import { LocalStorage } from "@/shared/services/local-storage";
import { MdCheckCircle, MdStar, MdPlayCircle, MdSchool } from "react-icons/md";
import Link from "next/link";

export default function ProgressoPage() {
  const [nome] = useState(() => LocalStorage.Usuario.getNome());
  const [favoritos] = useState(() => LocalStorage.Favoritos.get());
  const [totalConcluidas] = useState(() => LocalStorage.AulasConcluidas.getTotalConcluidas());
  const [cursosIniciados] = useState(() => {
    if (typeof window === "undefined") return 0;
    return Object.keys(window.localStorage)
      .filter(key => key.startsWith("DONE_CLASSES_")).length;
  });
  const [continuando] = useState(() => LocalStorage.ContinuarCurso.get());

  return (
    <div className="flex flex-col gap-6 px-4 py-6 md:px-6 md:py-8 max-w-3xl mx-auto">
      <div className="flex flex-col gap-1">
        <p className="text-olive-600 text-sm md:text-base font-medium">
          Bem-vindo,
        </p>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800">
          {nome || "Aluno"} 
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          Veja como está seu progresso na plataforma
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="flex flex-col gap-2 p-3 md:p-5 bg-olive-200 rounded-2xl">
          <MdCheckCircle size={22} className="text-olive-600 md:w-7 md:h-7" />
          <span className="font-bold text-2xl md:text-3xl text-gray-800">
            {totalConcluidas}
          </span>
          <span className="text-xs md:text-sm text-gray-600 leading-tight">
            Aulas concluídas
          </span>
        </div>

        <div className="flex flex-col gap-2 p-3 md:p-5 bg-olive-200 rounded-2xl">
          <MdSchool size={22} className="text-olive-600 md:w-7 md:h-7" />
          <span className="font-bold text-2xl md:text-3xl text-gray-800">
            {cursosIniciados}
          </span>
          <span className="text-xs md:text-sm text-gray-600 leading-tight">
            Cursos iniciados
          </span>
        </div>

        <div className="flex flex-col gap-2 p-3 md:p-5 bg-olive-200 rounded-2xl">
          <MdStar size={22} className="text-olive-600 md:w-7 md:h-7" />
          <span className="font-bold text-2xl md:text-3xl text-gray-800">
            {favoritos.length}
          </span>
          <span className="text-xs md:text-sm text-gray-600 leading-tight">
            Favoritos
          </span>
        </div>
      </div>

      {continuando && (
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg md:text-xl text-gray-800">
            Continue de onde parou!
          </h2>
          <Link
            href={`/player/${continuando.courseId}/${continuando.classId}`}
            className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white border rounded-2xl hover:border-olive-400 active:scale-[0.98] transition-all"
          >
            <div className="p-2 md:p-3 bg-olive-200 rounded-xl shrink-0">
              <MdPlayCircle size={24} className="text-olive-600 md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-xs text-olive-600 font-medium">
                Continue assistindo
              </span>
              <span className="font-semibold text-gray-800 text-sm md:text-base truncate">
                {continuando.className}
              </span>
              <span className="text-xs md:text-sm text-gray-500 truncate">
                {continuando.courseName}
              </span>
            </div>
          </Link>
        </div>
      )}

      {totalConcluidas === 0 && cursosIniciados === 0 && (
        <div className="flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-2xl text-center">
          <MdSchool size={44} className="text-gray-300" />
          <p className="font-semibold text-gray-600 text-sm md:text-base">
            Você ainda não começou nenhum curso
          </p>
          <Link
            href="/cursos"
            className="text-olive-600 font-medium text-sm md:text-base hover:underline"
          >
            Ver cursos disponíveis →
          </Link>
        </div>
      )}

    </div>
  );
}