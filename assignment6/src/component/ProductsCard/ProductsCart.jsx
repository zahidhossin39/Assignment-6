import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductsCart = ({ cartItems, removeFromCart, clearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-10 text-center py-16">
        <div className="text-6xl mb-4 flex justify-center text-slate-300">
          <FaShoppingCart />
        </div>
        <p className="text-slate-400 text-lg font-medium">Your cart is empty.</p>
        <p className="text-slate-300 text-sm mt-1">Click "Buy Now" on a product to add it here.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800">Your Cart</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors duration-150"
            >
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-violet-400 text-xs font-bold">
                    {item.name?.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-400">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm font-medium text-red-400 hover:text-red-600 transition-colors duration-150 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500">Total</span>
            <span className="text-xl font-bold text-slate-900">${total}</span>
          </div>

          <button
            onClick={clearCart}
            className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-xl tracking-wide cursor-pointer transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-violet-300 active:opacity-100"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;