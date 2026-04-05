import React from "react";
import bannerImg from "../../../assets/banner.png";
import playIcon from "../../../assets/Play.png";

const Banner = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-left">
          <div className="inline-flex items-center space-x-2 bg-[#F5F3FF] text-[#7C3AED] px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-[#7C3AED] rounded-full"></div>
            <span className="text-sm font-medium">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1F2937] leading-[1.1] mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-[#6B7280] mb-8">Explore Products</p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-4 px-8 rounded-full transition-all shadow-md">
              Explore Products
            </button>
            <button className="flex items-center space-x-2 border border-[#4F39F6] text-[#4F39F6] font-semibold py-4 px-8 rounded-full transition-all hover:bg-blue-50">
              <img src={playIcon} alt="play" className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden p-2">
            <img
              src={bannerImg}
              alt="Digital Workflow"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
