export default function ErrorPage() {
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
          src="https://img.icons8.com/ios-glyphs/90/error--v1.png"
          alt="Error Icon"
          height={50}
        />
      </div>
      <p style={{ fontSize: "1.6rem" }}>Page Not Found</p>
    </div>
  );
}
