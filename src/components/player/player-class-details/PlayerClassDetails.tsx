"use client";

import { Tabs } from "radix-ui";
import PlayerVideoPlayer from "./components/PlayerVideoPlayer";
import Headercurso from "@/components/header-curso/header-curso";
import PlayerClassHeader from "./components/PlayerClassHeader";
import Comments from "./components/comments/comments";
import { MdComment, MdThumbUp, MdVisibility } from "react-icons/md";
import { PropsComment } from "./components/comments/coment";
import { useEffect } from "react";
import { LocalStorage } from "@/shared/services/local-storage";

interface PropsClassDetails {
  course: {
    id: string;
    title: string;
    description: string;
    classes: number;
  };
  classitem: {
    id: string;
    viewsCount: number;
    likesCount: number;
    commentsCount: number;
    title: string;
    description: string;
    videoId: string;
  };
  comments: PropsComment[];
}

export default function PlayerClassDetails({
  course,
  classitem,
  comments
}: PropsClassDetails) {

  useEffect(() => {
  LocalStorage.ContinuarCurso.set({
    classId: classitem.id,
    courseId: course.id,
    className: classitem.title,
    courseName: course.title,
  })
}, [course.id, course.title, classitem.id, classitem.title])

  return (
    <div className="flex-1 lg:overflow-auto w-full">
      <div className="flex flex-col gap-2">
        <div className="aspect-video w-full">
          <PlayerVideoPlayer videoId={classitem.videoId} />
        </div>
        <div className="flex gap-2 opacity-80">
          <div className="flex gap-1 items-center">
            <MdVisibility />
            <span>{classitem.viewsCount}</span>
            <span>vizualizações</span>
          </div>
          <div className="flex gap-1 items-center">
            <MdThumbUp />
            <span>{classitem.likesCount}</span>
            <span>likes</span>
          </div>
          <div className="flex gap-1 items-center">
            <MdComment/>
            <span>{classitem.commentsCount}</span>
            <span>comentarios</span>
          </div>
        </div>
      </div>

      <Tabs.Root defaultValue="class-details" className="px-2 py-4 w-full">
        <Tabs.List className="flex gap-4 overflow-x-auto lg:overflow-visible whitespace-nowrap pb-2 lg:pb-0">
          <Tabs.Trigger
            value="class-details"
            className="p-2 flex-shrink-0 text-sm lg:text-base flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-olive-900 transition-colors"
          >
            Visão geral
          </Tabs.Trigger>

          <Tabs.Trigger
            value="class-comments"
            className="p-2 flex-shrink-0 text-sm lg:text-base flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-olive-900 transition-colors"
          >
            Comentarios
          </Tabs.Trigger>

          <Tabs.Trigger
            value="course-details"
            className="p-2 flex-shrink-0 text-sm lg:text-base flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-olive-900 transition-colors"
          >
            Detalhes do curso
          </Tabs.Trigger>
        </Tabs.List>

        <hr className="my-2" />

        <Tabs.Content value="class-details">
          <PlayerClassHeader
            title={classitem.title}
            description={classitem.description}
          />
        </Tabs.Content>

        <Tabs.Content value="class-comments">
          <Comments
            comments={comments}
          />
        </Tabs.Content>

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
