import React, { useState, useContext, useReducer } from "react";
import { useListContext } from "../../utils/GlobalState";
import "./style.css";
import { ADD_LIST } from "../../utils/actions";
import reducer from '../../utils/reducers';


export default function List() {
  const [newListName, setNewListName] = useState("");
  const [lists, setLists] = useState([{ name: "Watch List", link: "#" }]);
  const [isCreatingList, setIsCreatingList] = useState(false);
  const initialState = useListContext();
  const [state, dispatch] = useReducer(reducer, initialState);
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

  // const addList = useContext(useListContext);

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
          <button onClick={(e) => {
            handleCreateList(e);
            return dispatch({ type: ADD_LIST, payload: e.target.value})}}>Create List</button>
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
