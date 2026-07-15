import { useReducer } from "react";

import Reducer from "./Reducer";

export default function App() {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });

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
      <div style={counterStyle}>{state.count}</div>
      <div style={buttonsContainerStyle}>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "DECREASE" })}
        >
          -
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "INCREASE" })}
        >
          +
        </button>
      </div>
    </div>
  );
}
