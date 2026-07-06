import penguin from "./assets/images/penguin.png";

const styles = {
  containerFluid: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
  },
  container: {
    display: "flex",
    gap: "1.5rem",
  },
  heading: {
    fontSize: "3rem",
  },
  textShadow: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
};

export default function App() {
  return (
    <div style={styles.containerFluid}>
      <div style={{ ...styles.container }}>
        <h1 style={{ ...styles.heading, ...styles.textShadow }}>
          The Penguin House
        </h1>
      </div>
      <div style={{ ...styles.container }}>
        <img src="images/house.png" alt="House Image" height={48} />
        <img src={penguin} alt="Penguin Image" height={48} />
      </div>
    </div>
  );
}
