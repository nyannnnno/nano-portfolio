import React from "react";

const Loader = () => {
  return (
    <div className="loader border-[0.1em] border-[#333] bg-white text-black text-sm p-6 w-48 mx-auto mt-24 shadow-lg rounded relative overflow-hidden box-border">
      <div className="loader-header absolute top-0 left-0 right-0 h-6 bg-[#333] rounded-t px-2 flex items-center justify-between">
        <span className="loader-title text-[#eee] text-xs">nyan's</span>
        <div className="loader-controls flex space-x-1">
          <div className="control w-3 h-3 bg-[#ff7676] rounded-full"></div>
          <div className="control w-3 h-3 bg-[#ffff85] rounded-full"></div>
          <div className="control w-3 h-3 bg-[#86ff86] rounded-full"></div>
        </div>
      </div>

      <div className="text inline-block whitespace-nowrap overflow-hidden border-r-[0.2em] border-r-white mt-6 animate-typing">
        Loading...
      </div>
      
    </div>
  );
};

export default Loader;
