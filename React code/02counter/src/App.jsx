import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //using hookes for ui updation : useState is responsible for changing state not value, propagate change in UI ie DOM, we get two thing in the form of array in usestate 1: 0th index value 2: is function
  //setcounter is a function responsible for updating counter variable
  let [counter, setCounter] = useState(0);
  //create value
  // let counter = 5;

  const addValue = () => {
    console.log("value added", counter);
    // for checking the wroking of addvalue in counter
    if (counter >= 20) {
      return counter;
    } else {
      counter = counter + 1;
    }
    // setCounter(counter + 1) or
    setCounter(counter);
  };

  const removeValue = () => {
    // console.log("value removed", counter);
    if (counter <= 0) {
      return counter;
    } else {
      counter = counter - 1;
    }
    setCounter(counter);
  };

  return (
    //hard coded value
    <>
      <h1>New Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
