// import React from 'react'
// import "./App.css"

// const displayTea=true;

// const App = () => {
//   return (
//     <div className="App">
//       <h2>Render React Component Conditionally</h2>
//       {/* if displaytea is true then your element on the right side of && will be the output */}
//       {displayTea && <img src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="tea" />}
//       {!displayTea && <img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="coffee" />}
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import Test from "./components/Test";
import "./App.css";

const App = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      {/* {isToggled && <Test />} */}
      {isToggled ? <Test /> : <p>The value is False</p>}
    </div>
  );
};

export default App;
