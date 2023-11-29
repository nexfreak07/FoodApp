import Header from "./components/Layout/Header";
import React, {Fragment} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./context/CartProvider";
function App() {

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const hideModalHandler = () => {
    setShowModal(false);
  }
  return (
    
   <CartProvider>
    {showModal && <Cart onClose={hideModalHandler}></Cart>}
    <Header onCartClick={showModalHandler}>
    </Header>
    <main>
      <Meals></Meals>
    </main>
   </CartProvider>
  );
}

export default App;
