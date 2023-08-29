import axios from 'axios';

const url = 'https://api.jikan.moe/v4/anime';

export const fetchAnime = async (animeId) => {
    try {
        const response = await axios.get(`${url}/anime/${animeId}`);
        if (!response.data) {
            throw new Error('No data returned');
        }

        const { title, image, episodes, status } = response.data.data;

        return {
            title: title?.title || true,
            imageURL: image?.jpg?.image_url || true,
            episodes: episodes || true,
            status: status || true
        };
    } catch (err) {
        console.error('Error fetching data', err);
    }
};