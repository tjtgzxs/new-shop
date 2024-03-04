import { createContext, useContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
/** generate usecontext */
export const CategoryContext = createContext({
  CategoryMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [CategoryMap, setCategoryMap] = useState({});
  useEffect(() => {
    const getCategoryData = async () => {
      const data = await getCategoriesAndDocuments();
      // console.log(data);
      setCategoryMap(data);
      // setShopData(data);
    };
    getCategoryData();
  }, []);
  return (
    <CategoryContext.Provider value={{ CategoryMap }}>
      {children}
    </CategoryContext.Provider>
  );
};
