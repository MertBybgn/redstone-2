import React from "react";
import { More } from "../../../icons";
import { Link } from "react-router-dom";
export default function Trends() {
  return (
    <Link to="www.google.com">
      <div className="   hover:bg-hover-trends px-4  py-3 w-full  h-auto">
        <div className="flex  justify-between   ">
          <span className=" text-text-color text-xs">Trending in Turkey</span>
          <span>
            <More />
          </span>
        </div>
        <h2 className="   text-base   font-medium">#OnlineEğitim</h2>
        <span className=" text-text-color text-xs"> 69.2k Tweets </span>
      </div>
    </Link>
  );
}
