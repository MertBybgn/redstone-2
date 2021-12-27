import React from "react";
import cn from "classnames";
export default function Avatar({ size, rounded }) {
  const img =
    "https://pbs.twimg.com/profile_images/1304029632946229248/odzWTPHB_400x400.jpg";
  const style = {
    size: {
      sm: "w-8 h-8",
      base: "w-12 h-12",
      xl: "w-16 h-16",
      xxl: "w-[152px] h-[152]",
    },
    rounded: {
      full: "rounded-full",
    },
  };
  return (
    <div className=" ">
      <img
        className={cn(style.size[size], style.rounded[rounded])}
        src={img}
        alt="mert"
      />
    </div>
  );
}
