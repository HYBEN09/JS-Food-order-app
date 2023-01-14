import { useReducer } from "react";
import { CartContext } from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //같은 음식 항목은 같이 그룹화 => 음식 기준으로 수량을 관리
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);

    //장바구니 항목의 가격을 모두 더한 것.
    const updatedTotalItems =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalItems,
    };
  }
  return defaultCartState;
};

//CartContext 데이터를 관리하고, 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것
export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //장바구니에 추가해야 할 항목을 얻습니다.
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  //컨텍스트 자체를 위해 설정한 필드
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
