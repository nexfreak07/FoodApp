import React from 'react';

const CartContext = React.createContext({
    items : [],
    totalAmount : 0,
    addItem : (item)=>{}, // Item is object of id name amount etc
    removeItem : (id)=>{} 
});

export default CartContext;