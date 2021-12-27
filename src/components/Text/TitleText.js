import React from "react";

export default function TitleText({ children }) {
  return (
    <div>
      <h1 className=" font-medium text-lg">{children}</h1>
    </div>
  );
}
