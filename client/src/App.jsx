import { useState, useEffect } from "react";
import "./App.css";

const url = "/node";

export const App = () => {
  const [message, setMessage] = useState("error");

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a test message, after updates</h1>
        <p>{message}</p>
      </header>
    </div>
  );
};
