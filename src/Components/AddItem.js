import React, { useState } from "react";

const AddItem = ({ addingItem }) => {
  const [add, setAdd] = useState("");
  const adding = () => {
    addingItem({ id: Math.random(), title: add });
    setAdd("");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        className="add"
        type="text"
        value={add}
        placeholder="What do you have to do ..."
        onChange={(e) => setAdd(e.target.value)}
      />
      <button className="add-btn" onClick={add === "" ? null : adding}>
        {" "}
        ADD{" "}
      </button>
    </div>
  );
};

export default AddItem;
