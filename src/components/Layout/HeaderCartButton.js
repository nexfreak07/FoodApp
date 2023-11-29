import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/cart-context";
const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;
  const [isBump, setIsBump] = useState(false);
  const numberOfCartItems = items.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const btnClasses = `${classes.button}  ${isBump ? classes.bump : ""}`;
  useEffect(() => {
    if(items.length === 0)
        return;

        // Setting True
    setIsBump(true);

    // Removing the class 
    const identifier = setTimeout(() => {
      setIsBump(false);
    }, 300);

    //Clean up func - for cleanup func always store the timeout in variable
    return () => {
        clearTimeout(identifier);
    }
}, [items]);

  return (
    <button className={btnClasses} onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
