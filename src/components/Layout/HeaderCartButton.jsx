import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";

import { CartIcon } from "../index";
import { CartContext } from "../../store/cart-context";

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  //장바구니 항목 수를 표시

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};
