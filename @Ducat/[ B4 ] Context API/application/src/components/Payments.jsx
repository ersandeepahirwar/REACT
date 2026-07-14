import { AmountContext, PriceContext, ProductContext } from "../App";

export default function Payments() {
  const styles = {
    table: {
      width: "35rem",
      borderCollapse: "collapse",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      fontSize: "1.4rem",
      textAlign: "center",
    },
    tr: {
      backgroundColor: "#2563eb",
      color: "#fff",
    },
    th: { padding: "12px" },
    td: { padding: "12px", border: "1px solid #ddd" },
  };

  return (
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
          <ProductContext.Consumer>
            {(product) => {
              return <td style={styles.td}>{product}</td>;
            }}
          </ProductContext.Consumer>
          <AmountContext.Consumer>
            {(amount) => {
              return <td style={styles.td}>{amount}</td>;
            }}
          </AmountContext.Consumer>
          <PriceContext.Consumer>
            {(price) => {
              return <td style={styles.td}>${price}</td>;
            }}
          </PriceContext.Consumer>
        </tr>
      </tbody>
    </table>
  );
}
