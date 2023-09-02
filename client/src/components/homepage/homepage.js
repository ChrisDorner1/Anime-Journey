import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
      <div className="home">
      <ul placeholder="List One"> Have you watched anything on this list?
      <button>Open list</button>
      </ul>
      <ul placeholder="List Two"> Have you watched anything on this list?
      <button>Open list</button>
      </ul>
      <ul placeholder="List Three"> Have you watched anything on this list?
      <button>Open list</button>
      </ul>
      </div>
  );
}
