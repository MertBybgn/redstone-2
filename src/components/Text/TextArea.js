import React from "react";

export default function TextArea({ children, Handilchench }) {
  return (
    <textarea
      maxLength={165}
      onChange={Handilchench}
      placeholder="Ne düşünüyorsun?"
      className="w-full  h-[110px]   resize-none bg-transparent focus:outline-none text-xl  place holder:text-text-color"
    >
      {children}
    </textarea>
  );
}
