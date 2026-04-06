import React, { useState, useEffect } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";

const PremiumTools = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-24 px-5 bg-white flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-none">
        Premium Digital Tools
      </h1>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-full shadow-sm mb-12">
        <button
          className={`py-3.5 px-10 rounded-full text-base font-medium cursor-pointer transition-all duration-300 ease-in-out border-none outline-none ${
            activeTab === "products"
              ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200"
              : "bg-transparent text-slate-600 hover:text-violet-600"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`py-3.5 px-10 rounded-full text-base font-medium cursor-pointer transition-all duration-300 ease-in-out border-none outline-none ${
            activeTab === "cart"
              ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200"
              : "bg-transparent text-slate-600 hover:text-violet-600"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart (0)
        </button>
      </div>

      {activeTab === "products" &&
        (isLoading ? (
          <div className="text-slate-500 text-lg mt-10 animate-pulse">
            Loading products...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        ))}

      {activeTab === "cart" && (
        <div className="text-slate-400 text-lg mt-10">Your cart is empty.</div>
      )}
    </section>
  );
};

export default PremiumTools;
