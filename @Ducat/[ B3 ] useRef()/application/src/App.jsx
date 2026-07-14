import { useRef, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const email = useRef("");

  console.log("Logging from the App Component");

  function submitData() {
    console.log(`
      Name  : ${name}
      Email : ${email.current}
      `);
  }

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
    },

    input: {
      width: "30rem",
      padding: "1rem 3rem",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
      borderRadius: "2rem",
      letterSpacing: "0.1em",
      textAlign: "center",
    },
    button: {
      background: "#000000",
      color: "#ffffff",
      padding: "1rem 3rem",
      borderRadius: "2rem",
      letterSpacing: "0.1em",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        style={styles.input}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="johndoe@gmail.com"
        style={styles.input}
        onChange={(event) => (email.current = event.target.value)}
      />
      <button style={styles.button} onClick={submitData}>
        Submit
      </button>
    </div>
  );
}
