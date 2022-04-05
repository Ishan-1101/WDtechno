import "./App.css";
import axios from "axios";
import React from "react";

function App() {
  let cancelToken;

  const onType = async (e) => {
    const search = e.target.value;

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Cancelling the prev req");
    }
    cancelToken = axios.CancelToken.source();

    const result = await axios.get(
      `http.......?q=${search}`,
      { cancelToken: cancelToken.token } //helps in removing trafic from your network
    );
    console.table(result.data);
  };
  return (
    <div>
      <input type="text" placeholder="Enter Search" onChange={onType} />
    </div>
  );
}

export default App;
