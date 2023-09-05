import React, { useState } from "react";
import "./style.css";

import { fetchAnime } from "../../utils/api";

export default function Search() {
  const [getAnime, setAnime] = useState("");
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearchChange = (e) => {
    setAnime(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (getAnime) {
      setLoading(true);
      setError(null);
      fetchAnime(getAnime)
      .then((data) => {
        if (data.length > 0) {
          setAnimeData(data);
        } else {
          console.error("No data received from the API.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error.message);
        setLoading(false);
      });
    }
  };
  const handleAddToList = (animeTitle) => {
    console.log(`Added ${animeTitle} to the list.`);
  };
  console.log(animeData)
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for Anime!"
          value={getAnime}
          onChange={handleSearchChange}
          />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        {loading ? (
          <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
            ) : (
              <ul className="lists">
            {animeData.map((anime) => (
              
              <li key={anime.title}>
                <img src={`https://cdn.myanimelist.net/images/anime/4/${anime}`} alt={anime.image_url} />
                <h3>{anime.title}</h3>
                <p>Episodes: {anime.episodes}</p>
                <p>Status: {anime.status}</p>
                <button onClick={() => handleAddToList(anime.title)}>
                  Add to List
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
