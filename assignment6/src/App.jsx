import { useState } from "react";
import "./App.css";
import NavBar from "./component/navbar/NavBar";
import Banner from "./component/navbar/banner/Banner";
import StatsBar from "./component/navbar/StatsBar/StatsBar";
import PremiumTools from "./component/PremiumTools/PremiumTools";
import ThreeStepProcess from "./component/ThreeStepProcess/ThreeStepProcess";
import Pricing from "./component/Pricing/Pricing";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <NavBar cartCount={cartItems.length} />
      <Banner />
      <StatsBar />
      <PremiumTools
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <ThreeStepProcess />
      <Pricing />
    </div>
  );
}

export default App;
