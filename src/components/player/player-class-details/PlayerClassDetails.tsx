"use client";

import { Tabs } from "radix-ui";
import { useRouter } from "next/navigation";
import PlayerVideoPlayer from "./components/PlayerVideoPlayer";

export default function PlayerClassDetails() {
  const router = useRouter;

  return (
    <div className="flex-1">
      <div className="aspect-video">
        <PlayerVideoPlayer videoId="epDCjksKMok" />
      </div>
      <Tabs.Root defaultValue="class-details">
        <Tabs.List>
          <Tabs.Trigger value="class-details" className="p-2">Visão geral</Tabs.Trigger>
          <Tabs.Trigger value="class-comments">Comentarios</Tabs.Trigger>
          <Tabs.Trigger value="course-details">Visão do curso</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="class-details">Detalhes da aula</Tabs.Content>
        <Tabs.Content value="class-comments">comentarios da aula</Tabs.Content>
        <Tabs.Content value="course-details">Detalhes do curso</Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
