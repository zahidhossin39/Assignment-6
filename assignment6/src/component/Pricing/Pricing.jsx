import React from 'react';

const plans = [
    {
        name: 'Starter',
        tagline: 'Perfect for getting started',
        price: '0',
        features: [
            'Access to 10 free tools',
            'Basic templates',
            'Community support',
            '1 project per month',
        ],
        buttonText: 'Get Started Free',
        popular: false,
    },
    {
        name: 'Pro',
        tagline: 'Best for professionals',
        price: '29',
        features: [
            'Access to all premium tools',
            'Unlimited templates',
            'Priority support',
            'Unlimited projects',
            'Cloud sync',
            'Advanced analytics',
        ],
        buttonText: 'Start Pro Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        tagline: 'For teams and businesses',
        price: '99',
        features: [
            'Everything in Pro',
            'Team collaboration',
            'Custom integrations',
            'Dedicated support',
            'SLA guarantee',
            'Custom branding',
        ],
        buttonText: 'Contact Sales',
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section className="py-20 px-5 bg-[#F8F9FB] flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                Simple, Transparent Pricing
            </h2>
            <p className="text-slate-500 text-base mb-14">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl px-8 py-10 flex flex-col text-left ${
                            plan.popular
                                ? 'bg-[#7C3AED] text-white shadow-xl'
                                : 'bg-white border border-slate-200 text-slate-800 shadow-sm'
                        }`}
                    >
                        {plan.popular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">
                                Most Popular
                            </span>
                        )}

                        <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                            {plan.name}
                        </h3>
                        <p className={`text-sm mb-6 ${plan.popular ? 'text-violet-200' : 'text-slate-400'}`}>
                            {plan.tagline}
                        </p>

                        <div className="flex items-end gap-1 mb-8">
                            <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                                ${plan.price}
                            </span>
                            <span className={`text-sm mb-2 ${plan.popular ? 'text-violet-200' : 'text-slate-400'}`}>
                                /Month
                            </span>
                        </div>

                        <ul className="flex flex-col gap-3 mb-10">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-white' : 'text-[#4F39F6]'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className={plan.popular ? 'text-violet-100' : 'text-slate-600'}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`mt-auto w-full py-3 rounded-full font-semibold text-sm cursor-pointer transition-all duration-200 hover:opacity-90 hover:shadow-lg ${
                                plan.popular
                                    ? 'bg-white text-[#4F39F6]'
                                    : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                            }`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;