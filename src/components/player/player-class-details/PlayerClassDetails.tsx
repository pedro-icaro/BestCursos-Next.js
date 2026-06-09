"use client";

import { Tabs } from "radix-ui";
import PlayerVideoPlayer from "./components/PlayerVideoPlayer";
import Headercurso from "@/components/header-curso/header-curso";
import PlayerClassHeader from "./components/PlayerClassHeader";
import Comments from "./components/comments/comments";

interface PropsClassDetails {
  course: {
    title: string;
    description: string;
    classes: number;
  };
  classitem: {
    title: string;
    description: string;
  };
}

export default function PlayerClassDetails({ course, classitem }: PropsClassDetails) {
  // O useState foi removido! O Radix cuidará de saber qual aba está ativa.

  return (
    <div className="flex-1 overflow-auto">
      <div className="aspect-video">
        <PlayerVideoPlayer videoId="epDCjksKMok" />
      </div>
      
      <Tabs.Root defaultValue="class-details" className="px-2 py-4">
        <Tabs.List className="flex gap-4">
          
          {/* Aba 1 */}
          <Tabs.Trigger
            value="class-details"
            // O segredo está aqui: data-[state=active]:border-olive-900
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-olive-900 transition-colors"
          >
            Visão geral
          </Tabs.Trigger>

          {/* Aba 2 */}
          <Tabs.Trigger
            value="class-comments"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-olive-900 transition-colors"
          >
            Comentarios
          </Tabs.Trigger>

          {/* Aba 3 */}
          <Tabs.Trigger
            value="course-details"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-olive-900 transition-colors"
          >
            Detalhes do curso
          </Tabs.Trigger>
          
        </Tabs.List>
        
        <hr className="my-2" />
        
        <Tabs.Content value="class-details">
          <PlayerClassHeader title={classitem.title} description={classitem.description} />
        </Tabs.Content>
        
        <Tabs.Content value="class-comments">
          <Comments
            comments={[
              {
                author: {
                  image: "https://i.pinimg.com/736x/c8/7e/2f/c87e2f90bce2cb3382ced275fe75d8ef.jpg",
                  userName: "@LucasSousaDev",
                },
                content: "My comment",
                likeCount: 5,
                publishDate: "2024-09-09T20:16:37Z",
                replies: [
                  {
                    likeCount: 15,
                    content: "My reply",
                    replies: undefined,
                    publishDate: "2024-09-09T20:16:37Z",
                    author: {
                      userName: "@LucasSouzaDev",
                      image: "https://i.pinimg.com/736x/c8/7e/2f/c87e2f90bce2cb3382ced275fe75d8ef.jpg",
                    },
                  },
                ],
              },
            ]}
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