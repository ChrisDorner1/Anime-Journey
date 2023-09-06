import axios from 'axios';

const url = 'https://api.jikan.moe/v4/anime';

export const fetchAnime = async (query) => {
    try {
        const response = await axios.get(`${url}?q=${query}`);
        if (!response.data || response.data.data.length === 0) {
            throw new Error('No data returned');
        }

        const animeData = response.data.data;

        const animeArray = animeData.map((anime) => ({
            title: anime.title || "",
            imageURL: anime.images.jpg.image_url || "",
            episodes: anime.episodes || "",
            status: anime.status || ""
        }));

        return animeArray;
    } catch (err) {
        console.error('Error fetching data', err);
        throw err;
    }
};
