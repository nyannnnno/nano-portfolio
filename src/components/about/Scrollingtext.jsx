import React from 'react';

const ScrollingText = () => {
  return (
    <div className="w-full h-20 overflow-hidden relative">
      <div className="absolute flex animate-scroll whitespace-nowrap">
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
        <span className="px-4 text-3xl font-semibold">LET'S GET TO KNOW ME</span>
      </div>
    </div>
  );
};

export default ScrollingText;
