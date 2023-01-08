import { CartContext } from "./cart-context";

//CartContext 데이터를 관리하고, 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것
export const CartProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  //컨텍스트 자체를 위해 설정한 필드
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
