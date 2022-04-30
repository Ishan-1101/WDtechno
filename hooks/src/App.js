import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [state]);

  return (
    <div>
      <button
        onClick={() => {
          setState("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setState("users");
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          setState("comments");
        }}
      >
        comments
      </button>
      <h4>{state}</h4>
      {items.map((item) => {
        return <p>{JSON.stringify(item)}</p>;
      })}
    </div>
  );
};

export default App;
