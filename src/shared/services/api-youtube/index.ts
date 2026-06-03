import { youtube } from "@googleapis/youtube";

const YoutubeAPIClient = youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
});

export const APIYoutube = {
    course: {
        getAll: async () => {
            const playlistIds = ["PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o","PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV","PL29TaWXah3iYzP5FGywXezXm4ZvBibGSk"]

            const { data } = await YoutubeAPIClient.playlists.list({
                part: ["snippet"],
                id: playlistIds, 
            });

            const courses = (data.items || []).map(item => ({
                id: item.id || "",
                title: item.snippet?.title || "", 
                description: item.snippet?.description || "", 
                image: item.snippet?.thumbnails?.maxres?.url || "",
            }));


           return courses
        }
    }
};