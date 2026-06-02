"use client";

import { Tabs } from "radix-ui";
import PlayerVideoPlayer from "./components/PlayerVideoPlayer";
import { useState } from "react";
import Headercurso from "@/components/header-curso/header-curso";
import PlayerClassHeader from "./components/PlayerClassHeader";
import Comments from "./components/comments/comments";

interface PropsClassDetails {
  course: {
    title: string;
    description: string;
    classes: number;
  };
  classitem:{
    title:string;
    description:string;
  }
}

export default function PlayerClassDetails({ course, classitem }: PropsClassDetails) {
  const [valor, setvalor] = useState<string | number>("0");

  return (
    <div className="flex-1 overflow-auto">
      <div className="aspect-video">
        <PlayerVideoPlayer videoId="epDCjksKMok" />
      </div>
      <Tabs.Root defaultValue="class-details" className="px-2 py-4">
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
              Detalhes do curso
            </Tabs.Trigger>
          </button>
        </Tabs.List>
        <hr /><br />
        <Tabs.Content value="class-details"><PlayerClassHeader title={classitem.title} description={classitem.description}/></Tabs.Content>
        <Tabs.Content value="class-comments"><Comments /></Tabs.Content>
        <Tabs.Content value="course-details">
          <Headercurso
            classes={course.classes}
            description={course.description}
            title={course.title}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
