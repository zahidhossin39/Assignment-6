import React, { useState } from 'react';

const PremiumTools = () => {
    const [activeTab, setActiveTab] = useState('products');

    return (
        <section className="py-24 px-5 bg-white flex flex-col items-center justify-center text-center min-h-[400px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight leading-none">
                Premium Digital Tools
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                Choose from our curated collection of premium digital products designed 
                to boost your productivity and creativity.
            </p>

            <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                <button 
                    className={`py-3.5 px-10 rounded-full text-base font-medium cursor-pointer transition-all duration-300 ease-in-out border-none outline-none ${
                        activeTab === 'products' 
                        ? 'bg-linear-to-r from-[#7c3aed] to-[#9333ea] text-white shadow-lg shadow-violet-200' 
                        : 'bg-transparent text-slate-600 hover:text-[#7c3aed]'
                    }`}
                    onClick={() => setActiveTab('products')}
                >
                    Products
                </button>
                <button 
                    className={`py-3.5 px-10 rounded-full text-base font-medium cursor-pointer transition-all duration-300 ease-in-out border-none outline-none ${
                        activeTab === 'cart' 
                        ? 'bg-linear-to-r from-[#7c3aed] to-[#9333ea] text-white shadow-lg shadow-violet-200' 
                        : 'bg-transparent text-slate-600 hover:text-[#7c3aed]'
                    }`}
                    onClick={() => setActiveTab('cart')}
                >
                    Cart (0)
                </button>
            </div>
        </section>
    );
};

export default PremiumTools;

