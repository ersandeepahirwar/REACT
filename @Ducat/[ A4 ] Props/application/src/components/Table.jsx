import Row from "./Row";

export default function Table(props) {
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
        {props.data.map(({ ID, name, CGPA, city }, index) => {
          return (
            <Row key={index} ID={ID} name={name} CGPA={CGPA} city={city} />
          );
        })}
      </tbody>
    </table>
  );
}
