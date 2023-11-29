import { useContext } from "react";
import Modal from "../Interface/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../context/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2); // Output total items in cart

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHamdler = (item) => {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItems = cartCtx.items.map((items) => (
    <CartItems
      key={items.id}
      name={items.name}
      price={items.price}
      amount={items.amount}
      onAdd={cartItemAddHamdler.bind(null, items)}
      onRemove={cartItemRemoveHandler.bind(null, items.id)}
    />
  ));
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
