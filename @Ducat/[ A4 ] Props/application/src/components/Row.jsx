export default function Row({ ID, name, CGPA, city }) {
  return (
    <tr>
      <td>{ID}</td>
      <td>{name}</td>
      <td>{CGPA}</td>
      <td>{city}</td>
    </tr>
  );
}
