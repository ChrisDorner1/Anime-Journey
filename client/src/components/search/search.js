import React, { useState, useReducer } from "react";
import "./style.css";
import { ADD_TO_WATCH_LIST } from "../../utils/actions";
import reducer from '../../utils/reducers';
import { fetchAnime } from "../../utils/api";
import { useListContext } from "../../utils/GlobalState";

export default function Search() {
  const [getAnime, setAnime] = useState("");
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const initialState = useListContext();
  const [state, dispatch] = useReducer(reducer, initialState);
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
  // console.log(animeData.images.image_url)
  const handleAddToList = (animeTitle) => {
    console.log(`Added ${animeTitle} to the list.`);
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
          <ul className="lists">
            {animeData.map((anime) => (

              <ul key={anime.title}>
                <img src={anime.imageURL} alt={anime.title} />

                <h3>{anime.title}</h3>
                <p>Episodes: {anime.episodes}</p>
                <p>Status: {anime.status}</p>
                <button onClick={() => { handleAddToList(anime.title)
                return dispatch({ type: ADD_TO_WATCH_LIST, payload: {name: anime.title, poster: anime.image_url}})
                }}>
                  Add to List
                </button>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}