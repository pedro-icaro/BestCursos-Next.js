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
          part: ["snippet"],
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
};
