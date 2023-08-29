import React, { useState, useEffect } from "react";
import { fetchAnime } from "../utils/api";

export default function Search() {
  const [searchAnime, setSearchAnime] = useState("");
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    if (searchAnime) {
      fetchAnime(searchAnime)
        .then((data) => setAnimeData([data]))
        .catch((error) => console.error("Error fetching data", error));
    }
  }, [searchAnime]);

  const handleSearchChange = (e) => {
    setSearchAnime(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Anime!"
        value={searchAnime}
        onChange={handleSearchChange}
      />
      <ul>
        {animeData.map((anime) => (
          <li key={anime.title}>
            <img src={anime.imageURL} alt={anime.title} />
            <h3>{anime.title}</h3>
            <p>Episodes: {anime.episodes}</p>
            <p>Status: {anime.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
