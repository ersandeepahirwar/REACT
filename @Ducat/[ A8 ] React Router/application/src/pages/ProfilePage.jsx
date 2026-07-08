import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { ID, name, role } = useParams();
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
          src="https://img.icons8.com/ios-filled/100/user-male-circle.png"
          alt="Profile Icon"
          height={50}
        />
      </div>
      <p style={{ fontSize: "1.6rem" }}>Me</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "1.4rem", color: "darkblue" }}>
          {name} ( {ID} )
        </p>
        <p style={{ fontSize: "1.4rem", color: "darkblue" }}>{role}</p>
      </div>
    </div>
  );
}
