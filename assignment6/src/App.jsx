import { useState } from "react";
import "./App.css";
import NavBar from "./component/navbar/NavBar";
import Banner from "./component/navbar/banner/Banner";
import StatsBar from "./component/navbar/StatsBar/StatsBar";
import PremiumTools from "./component/PremiumTools/PremiumTools";
import ThreeStepProcess from "./component/ThreeStepProcess/ThreeStepProcess";
import Pricing from "./component/Pricing/Pricing";
import Footer from "./component/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.find((item) => item.id === product.id);
    if (isAlreadyInCart) {
      toast.info(`${product.name} is already in the cart!`);
    } else {
      toast.success(`${product.name} added to cart!`);
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (productId) => {
    const productToRemove = cartItems.find((item) => item.id === productId);
    if (productToRemove) {
      toast.warn(`${productToRemove.name} removed from cart.`);
    }
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    if (cartItems.length > 0) {
      toast.success("Checkout successful! Cart cleared.", {
        position: "top-center",
        autoClose: 3000,
      });
      setCartItems([]);
    } else {
      toast.error("Your cart is empty!");
    }
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
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
