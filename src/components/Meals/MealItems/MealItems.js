import { useContext } from 'react';
import CartContext from '../../../context/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const price = `$ ${props.price.toFixed(2)}`; // This is a template literal to add $ and take only 2 decimal of amount 
  

    const cartCtx = useContext(CartContext);
    const addItemToCartHandler = (amount) => { // Amount is basically an object of below properties
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }
    return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
