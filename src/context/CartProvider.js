import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items : [],
    totalAmount : 0
}



const cartReducer = (state, action) => {
    if(action.type==='ADD'){
        // Item is object of id name amount etc
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingItemIndex];
        let updatedItems;
        if(existingCartItem){
           
           const upatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount}
           updatedItems = [...state.items];
           updatedItems[existingItemIndex] = upatedItem;
            
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        const updtedAmount = state.totalAmount + action.item.price * action.item.amount; 
        console.log(updatedItems)
        return {items: updatedItems, totalAmount: updtedAmount}
    }
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount === 1)
        {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else{
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {items: updatedItems, totalAmount: updatedTotalAmount};

    }

}
const CartProvider =  (props) => {


    const [cartState, dispatchCartState] =  useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartState({type:'ADD' , item: item})  // Item is object of id name amount etc
    }

    const removeItemFromCart = (id) => {
        dispatchCartState({type:'REMOVE' , id:id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;