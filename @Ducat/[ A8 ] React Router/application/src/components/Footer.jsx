const styles = {
  footer: {
    background: "#000000",
    color: "white",
    width: "100vw",
    height: "5rem",
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem",
  },
};

export default function Footer() {
  return <div style={styles.footer}>Copyright @ Codey Sandeep 2026</div>;
}
