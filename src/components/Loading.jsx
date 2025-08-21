import React from "react";

export default function Loading(){
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-12 h-12 border-4 border-gray-200 border-t-[6px] rounded-full animate-spin"
        style={{ borderTopColor: "#6C73C9" }}
      ></div>
    </div>
  );
};
