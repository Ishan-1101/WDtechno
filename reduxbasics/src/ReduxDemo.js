import React, { Component } from "react";
import { createStore } from "redux";

class ReduxDemo extends Component {
  render() {

    //STEP 2 : create a reducer, requires state and action
    const reducer = (state, action) => {
        if (action.type === "ATTACK") {
          return action.payload;
        }
        if (action.type === "REDATTACK") {
          return action.payload;
        }
        return state;
      };

    // STEP 1 : create store , requires reducer and stste
    const store = createStore(reducer, "Peace");


    //STEP 3 : subscribe
    store.subscribe(()=>{
        console.log(" store is now",store.getState());
    })

    //STEP 4 : Dispatch action
    store.dispatch({type:"ATTACK",payload:"Hulk"})
    store.dispatch({type:"REDATTACK",payload:"Iron Man"})

    return <div>test</div>;
  }
}

export default ReduxDemo;
