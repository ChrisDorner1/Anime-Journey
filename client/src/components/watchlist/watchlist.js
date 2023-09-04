import React, { useState } from "react";
import "./style.css";

export default function List() {
  const [newListName, setNewListName] = useState("");
  const [lists, setLists] = useState(["Watch List"]);
  const [isCreatingList, setIsCreatingList] = useState(false);

  const handleCreateList = () => {
    if (newListName.trim() !== "") {
      setLists([...lists, newListName]);
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
      <ul>
        {lists.map((listName, index) => (
          <li key={index}>{listName}</li>
        ))}
      </ul>
    </div>
  );
}
