export default function Image() {
  console.log("Logging from the Image Component");
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "5px solid #000000",
        borderRadius: "50%",
        boxShadow: "2px 2px 5px #000000",
      }}
    >
      <img
        src="https://img.icons8.com/color/96/pinguin.png"
        alt="Penguin Image"
        height={48}
      />
    </div>
  );
}
