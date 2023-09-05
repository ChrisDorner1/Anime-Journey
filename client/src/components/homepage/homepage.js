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
      <h2 placeholder="List One" className="holder"> Have you watched anything recently?</h2>
      </div>
  );
}
