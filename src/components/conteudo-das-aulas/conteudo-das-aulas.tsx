import Grupodeaulas, { AulasProps } from "./Grupodeaulas";

interface Grupoaulas {
  classgroups: AulasProps[];
}

export default function ConteudoDasAulas({ classgroups }: Grupoaulas) {
  return (
    <div className="flex flex-col gap-3">
      <ol className="flex flex-col">
        {classgroups.map((classgroup) => {
          return (
            <li key={classgroup.title}>
              <Grupodeaulas {...classgroup} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
