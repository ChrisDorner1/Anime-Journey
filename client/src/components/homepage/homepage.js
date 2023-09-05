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
    <>
      <div className="home">
        { user ? (
          <>
          <h2>Lists for {user.username}</h2>
          {user.lists.map((list) => ( 
            <div>
                {list.anime.map(({name}, index) => (
                  <div key={index} className="card px-1 py-1">
                  <p>{name}</p>
                  </div>
                ))}
                </div>
          ))}
          </>
        ): null}
      </div>
    </>
  ) 
};
