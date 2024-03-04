import { Route, Routes } from "react-router-dom";
import CategoryPreviewRoute from "../category-preview/category-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreviewRoute />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
