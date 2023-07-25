"use client";

import { Triangle } from "react-loader-spinner";

const LoadingSkeleton = () => {
  return (
    <div className="flex h-[100%] w-[100%] justify-center items-center">
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSkeleton;
