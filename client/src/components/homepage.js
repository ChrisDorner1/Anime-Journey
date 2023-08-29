import React from "react";

export default function home() {
  return (
    <div>
      <div>
        Welcome
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

      <div>Want some Anime memes?
        <Memes.Link />
      </div>
    </div>
  );
}
