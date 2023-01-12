import { Fragment } from "react";

import { AvailableMeals, MealsSummary } from "../index";

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
