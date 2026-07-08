export default function AboutUsPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 10rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>
        <img
          src="https://img.icons8.com/dotty/480/about.png"
          alt="About Icon"
          height={50}
        />
      </div>
      <p style={{ fontSize: "1.6rem" }}>About Us</p>
    </div>
  );
}
