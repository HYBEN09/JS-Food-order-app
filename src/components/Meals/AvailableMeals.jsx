import classes from "./AvailableMeals.module.css";
import { MealItem, Card } from "../index";
import { useState, useEffect } from "react";

export const AvailableMeals = () => {
  // 데이터가 그곳에 있을 경우에 컴포넌트를 업데이트해야 합니다
  // 데이터가 변경되고 컴포넌트가 변경 후 다시 평가되어야 하는 경우 상태(state)가 필요
  const [meals, setMeals] = useState([]);

  //firebase 사용
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-e9efe-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };
    fetchMeals();
    //컴포넌트가 처음 로딩될 때만 실행
  }, []);

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
