"use client";

import { useRouter } from "next/navigation";
import GrupoAulas, { PropsGrupoAulas } from "../player/grupo-aulas";

interface PropsPlaylist {
  classGroups: Pick<PropsGrupoAulas, 'classes' | 'title' >[];
  PlayClassId:string;
  PlayCourseId:string;
}

export default function PlayerPlaylist({ classGroups, PlayClassId, PlayCourseId }: PropsPlaylist) {
  const router = useRouter();
  
  return (
    <div className="flex flex-col gap-2 h-full overflow-hidden">
      <div className="flex flex-col p-4 bg-olive-200 shrink-0">
        <h3 className=" text-lg">Conteúdo do curso</h3>
      </div>
      <ol className="flex-1 overflow-y-auto">
        {classGroups.map((classGroup, index) => (
          <li key={classGroup.title}>
            <GrupoAulas
            onCheck={classId => console.log("check", classId)}
            onPlay={(classId) => router.push(`/player/${PlayCourseId}/${classId}`)}
              PlayClassId={PlayClassId}
              {...classGroup}
              position={index} 
              
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
