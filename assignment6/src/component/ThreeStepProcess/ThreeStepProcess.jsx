import React from 'react';
import userIcon from '../../assets/user.png';
import packageIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png';

const steps = [
    {
        number: '01',
        icon: <img src={userIcon} alt="Create Account" className="w-10 h-10 object-contain" />,
        title: 'Create Account',
        description: 'Sign up for free in seconds. No credit card required to get started.',
    },
    {
        number: '02',
        icon: <img src={packageIcon} alt="Choose Products" className="w-10 h-10 object-contain" />,
        title: 'Choose Products',
        description: 'Browse our catalog and select the tools that fit your needs.',
    },
    {
        number: '03',
        icon: <img src={rocketIcon} alt="Start Creating" className="w-10 h-10 object-contain" />,
        title: 'Start Creating',
        description: 'Download and start using your premium tools immediately.',
    },
];

const ThreeStepProcess = () => {
    return (
        <section className="py-20 px-5 bg-[#F8F9FB] flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                Get Started In 3 Steps
            </h2>
            <p className="text-slate-500 text-base max-w-xs mb-14">
                Start using premium digital tools in minutes, not hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="relative bg-white border border-slate-100 rounded-2xl px-8 pt-10 pb-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center">
                            {step.number}
                        </span>

                        <div className="w-20 h-20 rounded-full bg-violet-50 flex items-center justify-center mb-6">
                            {step.icon}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {step.title}
                        </h3>

                        <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ThreeStepProcess;