import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = (props) => {
  // 항상 소수점 이하 두 자리 수까지만 렌더링.
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
