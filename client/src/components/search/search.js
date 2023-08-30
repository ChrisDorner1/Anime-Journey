import React, { useState, useEffect } from "react";

import Footer from "../footer/footer"

import { fetchAnime } from "../utils/api";

export default function Search() {
  const [getAnime, setAnime] = useState("");
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    if (getAnime) {
      fetchAnime(getAnime)
        .then((data) => setAnimeData([data]))
        .catch((error) => console.error("Error fetching data", error));
    }
  }, [getAnime]);

  const handleSearchChange = (e) => {
    setAnime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for Anime!"
        value={getAnime}
        onChange={handleSearchChange}
      />
      <button type='submit'>Search</button>
      </form>
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
