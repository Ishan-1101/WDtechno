import React from "react";
import "./App.css";
export default function App() {
  const addDataIntoCache = (Name, url, res) => {
    const data = new Response(JSON.stringify(res));

    if ("caches" in window) {
      caches.open(Name).then((cache) => {
        cache.put(url, data);
        // alert("Data Added into cache!");
      });
    }
  };

  const deleteSpecificCache = (Name) => {
    if ("caches" in window) {
      caches.delete(Name).then( (res) =>{
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
