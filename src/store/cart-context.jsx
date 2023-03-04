import { createContext } from "react";

//컨텍스트 자체를 위해 설정한 필드
export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});
