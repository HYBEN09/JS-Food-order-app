import classes from "./Cart.module.css";

export const Cart = (props) => {
  cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, precw: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"] type="button"}>Close</button>
        <button className={classes.button} type="button">Order</button>
      </div>
    </div>
  );
};
