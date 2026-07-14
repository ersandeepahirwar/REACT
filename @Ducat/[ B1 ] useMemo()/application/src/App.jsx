import { useMemo, useState } from "react";

function calculate(n) {
  let sum = 0;
  for (let i = 1; i < 123456789 + n; i++) {
    sum += i;
  }
  return sum;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  let sum = useMemo(() => calculate(number), [number]);

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

  const sumStyle = {
    fontSize: "2rem",
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
      <div style={counterStyle}>{number}</div>
      <div style={sumStyle}>{sum}</div>
      <div style={buttonsContainerStyle}>
        <button style={buttonStyle} onClick={() => setNumber(number - 1)}>
          -
        </button>
        <button style={buttonStyle} onClick={() => setNumber(number + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
