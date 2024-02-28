import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { shopData } = useContext(ShopContext);
  return (
    <div className="product-container">
      {shopData.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Shop;
