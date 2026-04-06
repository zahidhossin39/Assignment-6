import React from "react";

const tagStyles = {
  "best seller": "bg-orange-50 text-orange-500 border border-orange-200",
  popular: "bg-violet-50 text-violet-600 border border-violet-200",
  new: "bg-green-50 text-green-600 border border-green-200",
};

const periodLabel = {
  monthly: "/Mo",
  yearly: "/Yr",
  "one-time": "/One-Time",
};

const ProductsCard = ({ product, onBuyNow, isPurchased }) => {
  const { name, description, price, period, tag, tagType, features, icon } =
    product;

  const badgeClass = tagStyles[tagType?.toLowerCase()] || tagStyles["popular"];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-0 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100 hover:-translate-y-1 cursor-default">
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center p-2 shrink-0">
          {icon && (
            <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          )}
        </div>

        {tag && (
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}
          >
            {tag}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
        {name}
      </h3>

      <p className="text-sm text-slate-500 leading-relaxed mb-5">
        {description}
      </p>

      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-4xl font-extrabold text-slate-900">${price}</span>
        <span className="text-sm font-medium text-slate-500">
          {periodLabel[period] ?? ""}
        </span>
      </div>

      <ul className="flex flex-col gap-2.5 mb-7 grow">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
          >
            <svg
              className="w-4 h-4 shrink-0 text-[#4F39F6]"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 10l4 4 6-7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {isPurchased ? (
        <button
          className="w-full py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-xl tracking-wide cursor-default transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-green-200"
          disabled
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4 10l5 5 7-8"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Added to cart
        </button>
      ) : (
        <button
          onClick={() => onBuyNow(product)}
          className="w-full py-3.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold rounded-xl tracking-wide cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 active:translate-y-0 active:opacity-100"
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

export default ProductsCard;
