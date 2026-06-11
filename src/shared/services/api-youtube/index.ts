import { youtube } from "@googleapis/youtube";
import { PLAYLIST_IDS } from "./courses-config";

const fetchWithNextConfig = (
  nextConfig?: NextFetchRequestConfig,
): typeof fetch => {
  return (input, params = {}) => {
    return fetch(input, { ...params, next: nextConfig });
  };
};

const YoutubeAPIClient = youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
  fetchImplementation: fetchWithNextConfig(),
});

export const APIYoutube = {
  course: {
    getAll: async () => {
      const { data } = await YoutubeAPIClient.playlists.list(
        {
          part: ["snippet"],
          id: PLAYLIST_IDS,
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 96,
          }),
        },
      );

      const courses = (data.items || []).map((item) => ({
        id: item.id || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image: item.snippet?.thumbnails?.maxres?.url || "",
      }));

      return courses;
    },
    getById: async (playlistId: string) => {
      const { data } = await YoutubeAPIClient.playlists.list(
        {
          part: ["snippet"],
          id: [playlistId],
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 96,
          }),
        },
      );

      const item = data.items?.[0];

      if (!item) return null;

      const x = {
        id: item.id || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image: item.snippet?.thumbnails?.maxres?.url || "",
      };
      return x
    },
  },
  lessons: {
    getByPlaylistId: async (playlistId: string) => {
      const { data } = await YoutubeAPIClient.playlistItems.list(
        {
          part: ["snippet",],
          playlistId: playlistId,
          maxResults: 50,
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 24,
          }),
        },
      );

      const lessons = (data.items || []).map((item) => ({
        id: item.id || "",
        videoId: item.snippet?.resourceId?.videoId || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image:
          item.snippet?.thumbnails?.maxres?.url ||
          item.snippet?.thumbnails?.high?.url ||
          "",
      }));

      return lessons;
    },
  },

  video: {
    getStatsById: async (videoId: string) => {
      const { data } = await YoutubeAPIClient.videos.list(
        {
          part: ["statistics"], 
          id: [videoId],
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 24, 
          }),
        }
      );

      const stats = data.items?.[0]?.statistics;
      
      const x = {
        viewsCount: Number(stats?.viewCount || 0),
        likesCount: Number(stats?.likeCount || 0),
        commentsCount: Number(stats?.commentCount || 0),
      };
      return x;
    },
    getComments: async (videoId: string) => {
      try {
        const { data } = await YoutubeAPIClient.commentThreads.list(
          {
            part: ["snippet"],
            videoId: videoId,
            maxResults: 50, // Você pode alterar para trazer mais ou menos comentários
            order: "relevance", // Pode ser "time" (mais recentes) ou "relevance" (mais relevantes)
          },
          {
            fetchImplementation: fetchWithNextConfig({
              revalidate: 60 * 60 * 2, // Revalidando a cada 2 horas (comentários mudam mais rápido)
            }),
          }
        );

        // O YouTube guarda os dados dentro de snippet.topLevelComment.snippet
        const comments = (data.items || []).map((item) => {
          const commentData = item.snippet?.topLevelComment?.snippet;

          return {
            content: commentData?.textDisplay || "",
            likeCount: Number(commentData?.likeCount || 0),
            publishDate: commentData?.publishedAt || "",
            author: {
              image: commentData?.authorProfileImageUrl || "",
              userName: commentData?.authorDisplayName || "Usuário Desconhecido",
            },
          };
        });

        return comments;
      } catch (error) {
        // Se os comentários estiverem desativados no vídeo, a API da erro. 
        // Esse try/catch previne que seu site saia do ar por causa disso e retorna uma lista vazia.
        return [];
      }
    },
  },
  

};
