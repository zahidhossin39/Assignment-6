import React from "react";

const StatsBar = () => {
  const stats = [
    { id: 1, value: "50K+", label: "Active Users" },
    { id: 2, value: "200+", label: "Premium Tools" },
    { id: 3, value: "4.9", label: "Rating" },
  ];

  return (
    <div className="bg-[#4F39F6] py-12 px-4 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.id}>
            <div className="flex flex-col items-center flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </h2>
              <p className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
            {/* Add divider for all items except the last one */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-16 w-[1.5px] bg-white/30" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
