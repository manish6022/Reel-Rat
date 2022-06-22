import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="w-40 h-40 border-l-4 border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
