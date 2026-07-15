import React, { useContext } from "react";

import { AmountContext, PriceContext, ProductContext } from "../App";

import Payments from "./Payments";

export default function Cart() {
  const product = useContext(ProductContext);
  const amount = useContext(AmountContext);
  const price = useContext(PriceContext);

  const styles = {
    table: {
      width: "35rem",
      borderCollapse: "collapse",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      fontSize: "1.3rem",
      textAlign: "center",
      letterSpacing: "0.05em",
    },
    tr: {
      backgroundColor: "#2563eb",
      color: "#fff",
    },
    th: { padding: "12px" },
    td: { padding: "12px", border: "1px solid #ddd" },
  };

  return (
    <React.Fragment>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tr}>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>{product}</td>
            <td style={styles.td}>{amount}</td>
            <td style={styles.td}>${price}</td>
          </tr>
        </tbody>
      </table>
      <Payments />
    </React.Fragment>
  );
}
