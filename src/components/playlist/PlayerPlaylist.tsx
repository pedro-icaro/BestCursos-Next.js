"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import GrupoAulas, { PropsGrupoAulas } from "../player/grupo-aulas";

interface PropsPlaylist {
  classGroups: Pick<PropsGrupoAulas, 'classes' | 'title'>[];
  PlayClassId: string;
  PlayCourseId: string;
}

export default function PlayerPlaylist({ classGroups, PlayClassId, PlayCourseId }: PropsPlaylist) {
  const router = useRouter();

  const [aulasConcluidas, setAulasConcluidas] = useState<string[]>(() =>
    classGroups
      .flatMap(group => group.classes)
      .filter(classItem => classItem.done)
      .map(classItem => classItem.classId)
  );

  const handleCheck = (classId: string) => {
    setAulasConcluidas(prev => {
      if (prev.includes(classId)) {
        return prev.filter(id => id !== classId); 
      }
      return [...prev, classId]; 
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