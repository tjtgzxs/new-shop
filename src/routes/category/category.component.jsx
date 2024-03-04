import "./category.styles.scss";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../contexts/category.context";
import ProductCard from "../../components/product-card/product-card.component";
const Category = () => {
  const { category } = useParams();
  const { CategoryMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(CategoryMap[category]);
  useEffect(() => {
    setProducts(CategoryMap[category]);
  }, [category, CategoryMap]);
  console.log(products);
  return (
    <div className="category-container">
      {/* <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2> */}

      {products &&
        products.map((item) => <ProductCard key={item.id} product={item} />)}
    </div>
  );
};

export default Category;
