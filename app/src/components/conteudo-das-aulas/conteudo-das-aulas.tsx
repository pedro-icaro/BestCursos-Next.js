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
        <Grupodeaulas
          key={classgroup.title}
          {...classgroup}
        />
      )
      })}
    </ol>
    </>
  );
}
