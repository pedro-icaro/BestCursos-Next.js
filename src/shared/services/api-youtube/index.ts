import { youtube } from "@googleapis/youtube";

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
      const playlistIds = [
        "PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
        "PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1",
        "PL29TaWXah3iYzP5FGywXezXm4ZvBibGSk",
      ];

      const { data } = await YoutubeAPIClient.playlists.list(
        {
          part: ["snippet"],
          id: playlistIds,
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
          id: [playlistId], // Manda só o ID do curso que o aluno clicou
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 96,
          }),
        },
      );

      const item = data.items?.[0]; // Pega o primeiro e único resultado

      // Se o YouTube não achar o curso, retorna vazio
      if (!item) return null;

      return {
        id: item.id || "",
        title: item.snippet?.title || "",
        description: item.snippet?.description || "",
        image: item.snippet?.thumbnails?.maxres?.url || "",
      };
    },
    lessons: {
      // Essa função recebe o ID da playlist que o aluno clicou
      getByPlaylistId: async (playlistId: string) => {
        const { data } = await YoutubeAPIClient.playlistItems.list(
          {
            part: ["snippet"],
            playlistId: playlistId, // Aqui ele vai buscar exatamente as aulas desse ID
            maxResults: 50, // Pega até 50 vídeos de uma vez (limite do YouTube)
          },
          {
            fetchImplementation: fetchWithNextConfig({
              revalidate: 60 * 60 * 24,
            }),
          },
        );

        const lessons = (data.items || []).map((item) => ({
          id: item.id || "",
          videoId: item.snippet?.resourceId?.videoId || "", // ESSE é o ID que você vai usar para dar play no vídeo!
          title: item.snippet?.title || "", // Título da aula
          description: item.snippet?.description || "", // Descrição da aula
          image:
            item.snippet?.thumbnails?.maxres?.url ||
            item.snippet?.thumbnails?.high?.url ||
            "", // Capa do vídeo
        }));

        return lessons;
      },
    },
  },
};
