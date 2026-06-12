"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import GrupoAulas, { PropsGrupoAulas } from "../player/grupo-aulas";
import { LocalStorage } from "@/shared/services/local-storage"; 

interface PropsPlaylist {
  classGroups: Pick<PropsGrupoAulas, 'classes' | 'title'>[];
  PlayClassId: string;
  PlayCourseId: string;
}

export default function PlayerPlaylist({ classGroups, PlayClassId, PlayCourseId }: PropsPlaylist) {
  const router = useRouter();

  const [aulasConcluidas, setAulasConcluidas] = useState<string[]>(() =>
    LocalStorage.AulasConcluidas.get(PlayCourseId) 
  );

  const handleCheck = (classId: string) => {
    setAulasConcluidas(prev => {
      const novas = prev.includes(classId)
        ? prev.filter(id => id !== classId)
        : [...prev, classId];

      LocalStorage.AulasConcluidas.save(PlayCourseId, novas); 

      return novas;
    });
  };

  return (
    <div className="flex flex-col gap-2 h-full overflow-hidden">
      <div className="flex flex-col p-4 bg-olive-200 shrink-0">
        <h3 className="text-lg">Conteúdo do curso</h3>
      </div>
      <ol className="flex-1 overflow-y-auto">
        {classGroups.map((classGroup) => (
          <li key={classGroup.title}>
            <GrupoAulas
              onCheck={handleCheck}
              onPlay={(classId) => router.push(`/player/${PlayCourseId}/${classId}`)}
              PlayClassId={PlayClassId}
              {...classGroup}
              classes={classGroup.classes.map(classItem => ({
                ...classItem,
                done: aulasConcluidas.includes(classItem.classId)
              }))}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}