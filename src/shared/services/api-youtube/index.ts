import { youtube } from "@googleapis/youtube";
import { PLAYLIST_IDS } from "./courses-config";
import { promises } from "dns";

const CACHE_4_DAYS = 60 * 60 * 96;
const CACHE_1_DAY  = 60 * 60 * 24;

export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Lesson = {
  id: string;
  videoId: string;
  title: string;
  description: string;
  image: string;
};

export type VideoStats = {
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
};

export type Comment = {
  content: string;
  likeCount: number;
  publishDate: string;
  author: { image: string; userName: string };
  replies: Omit<Comment, "replies">[];
};

const makeFetch = (revalidate: number): typeof fetch =>
  (input, params = {}) =>
    fetch(input, { ...params, next: { revalidate } });

const YoutubeAPIClient = youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

async function fetchAllPlaylistItems(playlistId: string): Promise<Lesson[]> {
  const lessons: Lesson[] = [];
  let pageToken: string | undefined;

  do {
    const { data } = await YoutubeAPIClient.playlistItems.list(
      { part: ["snippet"], playlistId, maxResults: 50, pageToken },
      { fetchImplementation: makeFetch(CACHE_1_DAY) },
    );

    for (const item of data.items || []) {
      lessons.push({
        id: item.id || "",
        videoId: item.snippet?.resourceId?.videoId || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image:
          item.snippet?.thumbnails?.maxres?.url ||
          item.snippet?.thumbnails?.high?.url ||
          "",
      });
    }

    pageToken = data.nextPageToken ?? undefined;
  } while (pageToken);

  return lessons;
}

const recomendados = ["PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA","PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n","PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV","PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1"]

export const APIYoutube = {
  course: {
    getAll: async (): Promise<Course[]> => {
      const { data } = await YoutubeAPIClient.playlists.list(
        { part: ["snippet"], id: PLAYLIST_IDS },
        { fetchImplementation: makeFetch(CACHE_4_DAYS) },
      );

      return (data.items || []).map((item) => ({
        id: item.id || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image: item.snippet?.thumbnails?.maxres?.url || "",
      }));
    },

    getById: async (playlistId: string): Promise<Course | null> => {
      const { data } = await YoutubeAPIClient.playlists.list(
        { part: ["snippet"], id: [playlistId] },
        { fetchImplementation: makeFetch(CACHE_4_DAYS) },
      );

      const item = data.items?.[0];
      if (!item) return null;

      return {
        id: item.id || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image: item.snippet?.thumbnails?.maxres?.url || "",
      };
    },
    getRecommended: async (): Promise<Course[]> => {
      const { data } = await YoutubeAPIClient.playlists.list(
        { part: ["snippet"], id: recomendados},
        {fetchImplementation: makeFetch(CACHE_4_DAYS)},
      );

      return (data.items || []).map((item) => ({
        id: item.id || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image: item.snippet?.thumbnails?.maxres?.url || "",
      }))
    },
  },

  lessons: {
    getByPlaylistId: fetchAllPlaylistItems,
  },

  video: {
    getStatsById: async (videoId: string): Promise<VideoStats> => {
      const { data } = await YoutubeAPIClient.videos.list(
        { part: ["statistics"], id: [videoId] },
        { fetchImplementation: makeFetch(CACHE_1_DAY) },
      );

      const stats = data.items?.[0]?.statistics;

      return {
        viewsCount:    Number(stats?.viewCount    || 0),
        likesCount:    Number(stats?.likeCount    || 0),
        commentsCount: Number(stats?.commentCount || 0),
      };
    },

    getComments: async (videoId: string): Promise<Comment[]> => {
      try {
        const { data } = await YoutubeAPIClient.commentThreads.list(
          {
            part: ["snippet", "replies"],
            videoId,
            maxResults: 50,
            order: "relevance",
          },
          { fetchImplementation: makeFetch(CACHE_1_DAY) },
        );

        return (data.items || []).map((item) => {
          const top = item.snippet?.topLevelComment?.snippet;

          return {
            content:     top?.textDisplay    || "",
            likeCount:   Number(top?.likeCount || 0),
            publishDate: top?.publishedAt    || "",
            author: {
              image:    top?.authorProfileImageUrl || "",
              userName: top?.authorDisplayName     || "Usuário Desconhecido",
            },
            replies: (item.replies?.comments || []).map((reply) => ({
              content:     reply.snippet?.textDisplay    || "",
              likeCount:   Number(reply.snippet?.likeCount || 0),
              publishDate: reply.snippet?.publishedAt    || "",
              author: {
                image:    reply.snippet?.authorProfileImageUrl || "",
                userName: reply.snippet?.authorDisplayName     || "Usuário Desconhecido",
              },
            })),
          };
        });
      } catch {
        return [];
      }
    },
  },
};