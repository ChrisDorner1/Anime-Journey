import React from "react";
import {useState} from "react"
import Footer from "./footer";

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

