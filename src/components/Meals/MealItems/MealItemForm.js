import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../Interface/Input";

const MealItemForm = (props) => {


  const [isAmountValid, setIsAmount] = useState(true)
  const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 )
    {
      setIsAmount(false); 
      return ; // Do nothnig just set isAmount invaid
    }
    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!isAmountValid && <p>Enter corret amount between 1-5</p>}
    </form>
  );
};
export default MealItemForm;
