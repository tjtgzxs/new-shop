import { createContext, useState, useEffect } from "react";

const generateCartItems = (currentCartList, product_item) => {
  // if current cart list include this product,quantity++
  if (currentCartList.find((el) => el.id === product_item.id)) {
    return currentCartList.map((el) =>
      el.id === product_item.id ? { ...el, quantity: el.quantity + 1 } : el
    );
  }
  //if not create a new cart item

  return [...currentCartList, { ...product_item, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotalCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalCount, setCartTotalCount] = useState(0);
  const addItemToCart = (productItem) => {
    setCartItems(generateCartItems(cartItems, productItem));
  };
  useEffect(() => {
    const total = cartItems.reduce((totalCount, cartItem) => {
      return totalCount + cartItem.quantity;
    }, 0);
    setCartTotalCount(total);
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartTotalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
