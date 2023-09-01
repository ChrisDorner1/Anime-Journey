import React from "react";
import Footer from "../footer/footer"
import Header from "../header/header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <header>
      <div>
        <div placeholder="Username"></div>
      </div>
      <ul placeholder="List One"> Have you watched anything on this list?
      <button>Open list</button>
      </ul>
      <ul placeholder="List Two"> Have you watched anything on this list?
      <button>Open list</button>
      </ul>
      <ul placeholder="List Three"> Have you watched anything on this list?
      <button>Open list</button>
      </ul>
    </header>
  );
}
