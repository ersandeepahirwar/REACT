export default function Button({ setData }) {
  const data = [
    { ID: 1714510001, name: "Ajay Kumar", CGPA: 6.4, city: "Lalitpur" },
    { ID: 1714510036, name: "Sandeep Ahirwar", CGPA: 6.9, city: "Jhansi" },
    { ID: 1714510037, name: "Rohit Kushwaha", CGPA: 6.7, city: "Moth" },
    { ID: 1714510042, name: "Shivam Yadav", CGPA: 6.8, city: "Hansari" },
    { ID: 1714510047, name: "Vedansh Pathak", CGPA: 6.9, city: "Jhansi" },
  ];

  return (
    <button
      style={{
        border: "none",
        outline: "none",
        background: "#000000",
        color: "#ffffff",
        padding: "1rem 3rem",
        borderRadius: "2rem",
        cursor: "pointer",
      }}
      onClick={() => setData(data)}
    >
      Generate Data
    </button>
  );
}
