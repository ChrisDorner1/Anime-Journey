import axios from 'axios';

const url = 'https://api.jikan.moe/v4/anime';

export const fetchAnime = async (animeId) => {
    try {
        const response = await axios.get(`${url}/${animeId}`);
        if (!response.data) {
            throw new Error('No data returned');
        }

        const { title, image_url, episodes, status } = response.data;

        return {
            title: title || "",
            imageURL: image_url || "",
            episodes: episodes || "",
            status: status || ""
        };
    } catch (err) {
        console.error('Error fetching data', err);
        throw err;
    }
};
