import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Todos from "./Components/Todos";
import AddItem from "./Components/AddItem";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { id: 1, title: "Workshop: React State", completed: false },
    { id: 2, title: "Checkpoint: Movie App", completed: false },
    { id: 3, title: "One2one: React Components", completed: false },
  ]);
  const markComplete = (id) => {
    setList(list.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };
  const deleteItem = (id) => {
    setList([...list.filter((item) => item.id !== id)]);
  };
  const addingItem = (newItem) => {
    setList([...list, newItem]);
  };
  return (
    <div className="App">
      <NavBar />
      <AddItem addingItem={addingItem} />
      <Todos list={list} markComplete={markComplete} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
