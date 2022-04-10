import "./App.css";
import Axios from "axios";
import React, { useState } from "react";

function App() {
  const [something, setSomething] = useState("");

  const getSomething = () => {
    Axios.get(`https://www.boredapi.com/api/activity`).then(
      (res)=>{
        console.log(res);
      }
    )
    // fetch(`https://www.boredapi.com/api/activity`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setSomething(data.activity);
    //   });
  };
  return (
    <div>
      <button onClick={getSomething}>I'm Bored</button>
      {something}
    </div>
  );
}

export default App;
