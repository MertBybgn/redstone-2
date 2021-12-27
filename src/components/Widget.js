import React from "react";

export default function Widget({ children }) {
  return (
    <div className="w-full mb-4  h-auto bg-widget-color rounded-2xl ">
      {children}
    </div>
  );
}
