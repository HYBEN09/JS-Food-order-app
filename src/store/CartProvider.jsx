import { useReducer } from "react";
import { CartContext } from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// * Reducer 함수
const cartReducer = (state, action) => {
  //같은 음식 항목은 같이 그룹화 => 음식 기준으로 수량을 관리
  if (action.type === "ADD") {
    //* 장바구니 항목을 추가 ===================================================

    // 항목에 이미 장바구니에 들어있는지 확인
    //? findIndex : 배열에서 항목의 인덱스를 찾아줍니다
    //현재 배열에서 보고 있는 항목이 전달된 액션으로 추가하는 항목과 동일한 id를 가지는 경우.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updateItem = {
        //existingCartItem을 복사해서 수량을 업데이트 -> 수량을 변경
        //예 : 스시가 이미 장바구니에 들어 있고 두 개의 스시를 더 추가했다면 장바구니에 들어 있는 기존 스시의 수량을 업데이트!
        ...existingCartItem,

        //액션에 의해 추가된 수량
        amount: existingCartItem.amount + action.item.amount,
      };
      //메모리에 있는 이전 배열을 편집하지 않고 이전 객체를 복사하는 새 배열을 만드는 것.
      updatedItems = [...state.items];
      //CartItems 배열에서 식별한 오래된 항목을 선택하여 updatedItem으로 덮어쓰는 것.
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    //*==================================================================

    //장바구니 항목의 가격을 모두 더한 것.
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

//*-----------------------------------------------------------------------------
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

  //*-----------------------------------------------------------------------------
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
