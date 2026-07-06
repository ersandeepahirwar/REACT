export default function App() {
  const data = [
    { ID: 1714510001, name: "Ajay Kumar", CGPA: 6.4, city: "Lalitpur" },
    { ID: 1714510036, name: "Sandeep Ahirwar", CGPA: 6.9, city: "Jhansi" },
    { ID: 1714510037, name: "Rohit Kushwaha", CGPA: 6.7, city: "Moth" },
    { ID: 1714510042, name: "Shivam Yadav", CGPA: 6.8, city: "Hansari" },
    { ID: 1714510047, name: "Vedansh Pathak", CGPA: 6.9, city: "Jhansi" },
  ];

  return (
    <table
      border={2}
      cellPadding={12}
      cellSpacing={0}
      style={{ fontSize: "1.3rem", textAlign: "center", margin: "5rem auto" }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>CGPA</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ ID, name, CGPA, city }, index) => {
          return (
            <tr key={index}>
              <td>{ID}</td>
              <td>{name}</td>
              <td>{CGPA}</td>
              <td>{city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
