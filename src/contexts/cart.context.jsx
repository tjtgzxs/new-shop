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

const deleteCartItem = (cartList, deleteItem) => {
  return cartList.filter((el, index, arr) => {
    return el.id !== deleteItem.id;
  });
};
const changeItemNum = (cartList, cartItem, num) => {
  console.log(cartList);
  console.log(cartItem);
  const current_list = cartList.map((el) => {
    if (el.id === cartItem.id) {
      const current_num = el.quantity + num;

      return { ...el, quantity: current_num };
    } else {
      return el;
    }
  });
  return current_list.filter((el) => {
    return el.quantity > 0;
  });
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotalCount: 0,
  deleteItemInCart: () => {},
  changeItemQuantity: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalCount, setCartTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(() => {
      return cartItems.reduce((pre_value, current_item) => {
        return pre_value + current_item.price * current_item.quantity;
      }, 0);
    });
  }, [cartItems]);
  const addItemToCart = (productItem) => {
    setCartItems(generateCartItems(cartItems, productItem));
  };
  const deleteItemInCart = (deleteItem) =>
    setCartItems(deleteCartItem(cartItems, deleteItem));
  const changeItemQuantity = (item, num) =>
    setCartItems(changeItemNum(cartItems, item, num));
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
        deleteItemInCart,
        changeItemQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
