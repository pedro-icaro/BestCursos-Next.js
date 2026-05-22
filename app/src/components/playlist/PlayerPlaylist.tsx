import GrupoAulas, { PropsGrupoAulas } from "../player/grupo-aulas";

interface PropsPlaylist {
  classGroups: PropsGrupoAulas[];
}

export default function PlayerPlaylist({ classGroups }: PropsPlaylist) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col p-4 bg-olive-200">
        <h3 className=" text-lg">Conteúdo do curso</h3>
      </div>
      <ol>
        {classGroups.map((classGroup) => (
          <li key={classGroup.title}>
            <GrupoAulas
              {...classGroup}
            
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
