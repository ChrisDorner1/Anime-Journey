import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
import { QUERY_ALL_LISTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data } = useQuery(QUERY_ALL_LISTS);
  let user;

  if (data) {
    user = data.user;
  }
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
