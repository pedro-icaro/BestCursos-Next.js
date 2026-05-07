import Grupodeaulas, { AulasProps } from "./Grupodeaulas";

interface Grupoaulas {
  classgroups: AulasProps[];
}

export default function ConteudoDasAulas({ classgroups }: Grupoaulas) {
  return (
    <>
      <ol>
        {classgroups.map((classgroup) => {
          return (
            <li key={classgroup.title}>
              <Grupodeaulas {...classgroup} />
            </li>
          );
        })}
      </ol>
    </>
  );
}
