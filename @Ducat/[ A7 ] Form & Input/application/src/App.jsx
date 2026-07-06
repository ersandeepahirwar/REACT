/*

import { useState } from "react";

const styles = {
  containerFluid: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  container: {
    display: "flex",
    gap: "2rem",
  },
  paragraph: {
    fontSize: "5rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  input: {
    padding: "1rem 5rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    borderRadius: "2rem",
    letterSpacing: "0.1em",
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

export default function App() {
  const [name, setName] = useState("John Doe");

  function greetUser() {
    alert(`Hello ${name}, How are you?`);
  }

  return (
    <div style={styles.containerFluid}>
      <div style={styles.container}>
        <p style={styles.paragraph}>I'm {name}</p>
      </div>
      <div style={styles.container}>
        <input
          type="text"
          name="name"
          placeholder="What is your name?"
          onChange={(event) => setName(event.target.value)}
          style={styles.input}
        />
        <button onClick={greetUser} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
}

*/

/*

import { useState } from "react";

const styles = {
  containerFluid: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  paragraph: {
    fontSize: "4rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  input: {
    padding: "1rem 5rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
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

export default function App() {
  const [data, setData] = useState({
    name: "John Doe",
    age: 26,
  });

  function getData(event) {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  function greetUser() {
    alert(`Hello ${data.name}, When is your birthday?`);
  }

  return (
    <div style={styles.containerFluid}>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          Hi, I'm {data.name} and I'm {data.age}
        </p>
      </div>
      <div style={styles.container}>
        <input
          type="text"
          name="name"
          placeholder="What is your name?"
          onChange={getData}
          style={styles.input}
        />
        <input
          type="text"
          name="age"
          placeholder="How old are you?"
          onChange={getData}
          style={styles.input}
        />
        <button onClick={greetUser} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
}

*/

import { useState } from "react";

const styles = {
  containerFluid: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  paragraph: {
    fontSize: "4rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  input: {
    padding: "1rem 5rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
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

export default function App() {
  const [data, setData] = useState({
    name: "John Doe",
    age: 26,
  });

  function getData(event) {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  function greetUser() {
    event.preventDefault();
    alert(`Hello ${data.name}, When is your birthday?`);
  }

  return (
    <div style={styles.containerFluid}>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          Hi, I'm {data.name} and I'm {data.age}
        </p>
      </div>
      <form onSubmit={greetUser} style={styles.container}>
        <input
          type="text"
          name="name"
          placeholder="What is your name?"
          onChange={getData}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="age"
          placeholder="How old are you?"
          onChange={getData}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
