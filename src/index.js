import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [string] = useState("Boss Mode Pushes Mars");
  const [resultString, setResultString] = useState("");

  const stringTricks = () => {
    // string.endsWith()
    // string.endsWith("Mars") ? setResultString("Yes") : setResultString("No");
    // string.startsWith()
    // string.startsWith("Mars") ? setResultString("Yes") : setResultString("No");
    // string.includes()
    // string.includes("Pushing") ? setResultString("Yes") : setResultString("No");
    // string.trim()
    // console.log(string);
    // console.log(string.trim());
    // string.toLowerCase()
    // console.log(string.toLowerCase());
    // string.toUpperCase()
    // console.log(string.toUpperCase());
    // string.charAt()
    // setResultString(string.charAt(15))
    // string.search()
    setResultString(string.search("h"));
    // string.concat()
    // setResultString(string.concat(" Away!"));
    // string.indexOf()
    // setResultString(string.indexOf("Mode"));
    // string.lastIndexOf()
    // setResultString(string.lastIndexOf("s"));
    // string.repeat()
    // setResultString(string.repeat(1));
    // string.slice()
    // setResultString(string.slice(6, 14));
    // string.split()
    // console.log(string.split(' '));
    // string.substr()
    // setResultString(string.substr(10, 4)); // Push
    // string.substring()
    // setResultString(string.substring(10, 14)); // Push
    // setResultString(string.valueOf())
    // string.length
    // setResultString(string.length);
  };

  return (
    <div className="App">
      <div>JavaScript Vitamins</div>
      <h1>JavaScript String Tricks</h1>
      <div className="result">{string}</div>
      {resultString && <div className="result">{resultString}</div>}
      <button className="pusher" onClick={stringTricks}>
        Trick
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
