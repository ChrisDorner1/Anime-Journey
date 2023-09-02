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
          if (data) {
            setAnimeData([data]);
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
        )}
      </div>
    </div>
  );
}
