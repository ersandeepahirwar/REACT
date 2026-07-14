import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  /* 

  useEffect(() => {
    console.log("useEffect() without a Dependency Array is called.");
    // Calls the setup function every time the component renders.
  });

  */

  /*

  useEffect(() => {
    console.log("useEffect() with an Empty Dependency Array is called.");
    // Calls the setup function only once after the initial render.
  }, []);

  */

  /*

  useEffect(() => {
    console.log("useEffect() with a Dependency Array is called.");
    // Calls the setup function every time the count value changes.
  }, [count]);

  */

  let number = 0;
  useEffect(() => {
    let time = setInterval(() => {
      number++;
      if (number === 100) {
        alert("Session Timeout!");
        number = 0;
      } else {
        console.log(number);
      }
    }, 1000);
    return () => clearInterval(time);
  });

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "2rem",
  };

  const counterStyle = {
    fontSize: "9rem",
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "2rem",
  };

  const buttonStyle = {
    border: "none",
    outline: "none",
    background: "#000000",
    fontSize: "2rem",
    color: "#ffffff",
    width: "7rem",
    padding: "0.5rem",
    borderRadius: "1rem",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={counterStyle}>{count}</div>
      <div style={buttonsContainerStyle}>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          -
        </button>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
