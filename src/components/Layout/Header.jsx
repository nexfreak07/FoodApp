import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Green Land Hotel</h1>
       <HeaderCartButton onCartClick={props.onCartClick}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious Food" />
      </div>
    </Fragment>
  );
};
export default Header;
