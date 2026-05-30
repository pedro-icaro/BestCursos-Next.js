"use client";

import { Tabs } from "radix-ui";
import PlayerVideoPlayer from "./components/PlayerVideoPlayer";
import { useState } from "react";

export default function PlayerClassDetails() {
  const [valor, setvalor] = useState<string | number>("0");

  return (
    <div className="flex-1">
      <div className="aspect-video">
        <PlayerVideoPlayer videoId="epDCjksKMok" />
      </div>
      <Tabs.Root defaultValue="class-details">
        <Tabs.List className="flex gap-4 ">
          <button onClick={() => setvalor(1)}>
            <Tabs.Trigger
              value="class-details"
              className={
                valor === 1
                  ? `p-2 flex items-center justify-center border-b-4 border-olive-900`
                  : `p-2 flex items-center justify-center`
              }
            >
              Visão geral
            </Tabs.Trigger>
          </button>
          <button onClick={() => setvalor(2)}>
            <Tabs.Trigger
              value="class-comments"
              className={
                valor === 2
                  ? `p-2 flex items-center justify-center border-b-4 border-olive-900`
                  : `p-2 flex items-center justify-center`
              }
            >
              Comentarios
            </Tabs.Trigger>
          </button>
          <button onClick={() => setvalor(3)}>
            <Tabs.Trigger
              value="course-details"
              className={
                valor === 3
                  ? `p-2 flex items-center justify-center border-b-4 border-olive-900`
                  : `p-2 flex items-center justify-center`
              }
            
            >
              Visão do curso
            </Tabs.Trigger>
          </button>
        </Tabs.List>
        <hr />
        <Tabs.Content value="class-details">Detalhes da aula</Tabs.Content>
        <Tabs.Content value="class-comments">comentarios da aula</Tabs.Content>
        <Tabs.Content value="course-details">Detalhes do curso</Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
