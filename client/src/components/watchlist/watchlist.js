import React, { useState } from "react";
import "./style.css";

export default function List() {
  const [newListName, setNewListName] = useState("");
  const [lists, setLists] = useState([{ name: "Watch List", link: "#" }]);
  const [isCreatingList, setIsCreatingList] = useState(false);

  const handleCreateList = () => {
    if (newListName.trim() !== "") {
      setLists([...lists, { name: newListName, link: "#" }]);
      setNewListName("");
      setIsCreatingList(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateList();
    }
  };

  return (
    <div className="list">
      <h2>Watch List</h2>
      {!isCreatingList ? (
        <button onClick={() => setIsCreatingList(true)}>Create List</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter List Name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleCreateList}>Create List</button>
        </div>
      )}
      <div className="list-column">
        {lists.map((list, index) => (
          <div key={index}>
            <a href={list.link}>{list.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
