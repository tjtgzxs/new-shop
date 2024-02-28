import { createContext, useContext, useState } from "react";
import SHOP_DATA from "..//shop-data.json";
/** generate usecontext */
export const ShopContext = createContext({
  shopData: [],
  setShopData: () => null,
});

export const ShopProvider = ({ children }) => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <ShopContext.Provider value={{ shopData, setShopData }}>
      {children}
    </ShopContext.Provider>
  );
};
