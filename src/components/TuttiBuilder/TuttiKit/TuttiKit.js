import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./TuttiKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Ingredient key={ingredient + i} type={ingredient} />);
    }
  });

  return (
    <div className={classes.TuttiKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
