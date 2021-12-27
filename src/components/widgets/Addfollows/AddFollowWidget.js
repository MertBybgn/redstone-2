import React from "react";
import TitleText from "../../Text/TitleText";
import Widget from "../../Widget";
import { Link } from "react-router-dom";
import AddFollow from "./AddFollow";

export default function AddFollowWidget() {
  return (
    <Widget>
      <div className="">
        <div className="px-4 pt-2 mb-2 ">
          <TitleText>Who to follow</TitleText>
        </div>
        <div className="  ">
          <AddFollow />
          <AddFollow />

          <AddFollow />
        </div>
        <div className=" rounded-b-2xl px-4 hover:bg-hover-trends flex items-center h-10 w-full text-btn-primary ">
          <Link to="www.trends.com">Show more</Link>
        </div>
      </div>
    </Widget>
  );
}
