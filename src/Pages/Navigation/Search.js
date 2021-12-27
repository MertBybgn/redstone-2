import React from "react";
import SvgSearch from "../../icons/Search";

export default function Search() {
  return (
    <div className=" relative flex items-center ">
      <span className="  text-btn-primary  left-[7px] absolute text-lg ">
        <SvgSearch />
      </span>
      <input
        className=" bg-widget-color border-widget-color focus:outline-none  pl-7 rounded-full border border-solid  w-52  h-8 "
        type="text"
      />
    </div>
  );
}
