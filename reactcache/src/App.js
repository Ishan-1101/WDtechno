import React from "react";
import "./App.css";
export default function App() {
  const addDataIntoCache = (cacheName, url, response) => {
    const data = new Response(JSON.stringify(response));

    if ("caches" in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        // alert("Data Added into cache!");
      });
    }
  };

  const deleteSpecificCache = (cacheName) => {
    if ("caches" in window) {
      caches.delete(cacheName).then( (res) =>{
        // alert(cacheName);
        return res;
      });
    }
  };

  return (
    <div>
      <button
        onClick={() =>
          addDataIntoCache("Ishan", "https://localhost:300", "SampleData")
        }
      >
        Add Data Into Cache
      </button>
      <button onClick={() => deleteSpecificCache("Ishan")}>Delete Cache</button>
    </div>
  );
}
