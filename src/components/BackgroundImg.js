import React from "react";
import cn from "classnames";

export default function BackgroundImg({ size }) {
  const img =
    "https://i.pinimg.com/originals/e8/76/f9/e876f9174f627daf2f6a7b66c7e6fe79.jpg";

  const style = {
    size: {
      sm: " w-[300px] h-14",
      xl: "w-[782px] h-[195px]",
    },
  };

  return (
    <div className="  ">
      <img className={cn(style.size[size], "rounded-t-2xl")} src={img} alt="" />
    </div>
  );
}

BackgroundImg.defaultProps = {
  rounded: "rounded-t-2xl ",
};
