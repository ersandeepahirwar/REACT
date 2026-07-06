import { useState } from "react";

import Button from "./components/Button";

export default function App() {
  const [data, setData] = useState([]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data.length ? (
        <table
          border={2}
          cellPadding={12}
          cellSpacing={0}
          style={{
            fontSize: "1.3rem",
            textAlign: "center",
            margin: "5rem auto",
          }}
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
      ) : null}
      {!data.length && (
        <div>
          <Button setData={setData} />
        </div>
      )}
    </div>
  );
}
