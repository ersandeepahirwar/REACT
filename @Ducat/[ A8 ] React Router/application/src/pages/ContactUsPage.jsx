import { useSearchParams } from "react-router-dom";

export default function ContactUsPage() {
  const [searchParams] = useSearchParams();

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
          src="https://img.icons8.com/dotty/80/contact-card.png"
          alt="Contact Icon"
          height={50}
        />
      </div>
      <p style={{ fontSize: "1.6rem" }}>Contact Us</p>
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
          {searchParams.get("name")}
        </p>
        <p style={{ fontSize: "1.4rem", color: "darkblue" }}>
          {searchParams.get("email")}
        </p>
        <p style={{ fontSize: "1.4rem", color: "darkblue" }}>
          {searchParams.get("phone")}
        </p>
      </div>
    </div>
  );
}
