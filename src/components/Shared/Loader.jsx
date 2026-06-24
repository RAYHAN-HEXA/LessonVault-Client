import React from "react";
import { FadeLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FadeLoader color="#2F8F3A" />
    </div>
  );
};

export default Loader;
