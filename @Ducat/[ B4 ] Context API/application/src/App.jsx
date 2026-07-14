import { createContext } from "react";

export const ProductContext = createContext();
export const AmountContext = createContext();
export const PriceContext = createContext();

import Orders from "./components/Orders";

export default function App() {
  return (
    <ProductContext.Provider value="Apple">
      <AmountContext.Provider value="100kg">
        <PriceContext.Provider value={12660}>
          <Orders />
        </PriceContext.Provider>
      </AmountContext.Provider>
    </ProductContext.Provider>
  );
}
