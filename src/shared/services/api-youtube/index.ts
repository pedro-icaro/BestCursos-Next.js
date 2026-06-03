import { youtube } from "@googleapis/youtube";


const fetchWithNextConfig = (nextConfig?: NextFetchRequestConfig): typeof fetch =>{
    return (input, params = {}) => {
        return fetch(input, { ...params, next: nextConfig})
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
            const playlistIds = ["PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o","PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1","PL29TaWXah3iYzP5FGywXezXm4ZvBibGSk"]

            const { data } = await YoutubeAPIClient.playlists.list({
                part: ["snippet"],
                id: playlistIds, 
            },{ fetchImplementation: fetchWithNextConfig({ revalidate: (60 * 60) * 96})});

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