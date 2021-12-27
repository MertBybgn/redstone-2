import React from "react";
import Widget from "../../Widget";
import Options from "../../../icons/Options";
import Trends from "./Trends";
import { Link } from "react-router-dom";
import TitleText from "../../Text/TitleText";

export default function TrendsWidget() {
  return (
    <Widget>
      <div>
        <div className=" px-4 pt-2 mb-2 flex justify-between items-center">
          <TitleText>Trends for you</TitleText>
          <button type="button" className=" text-lg">
            <Options />
          </button>
        </div>

        <div>
          <Trends />
          <Trends />
          <Trends />
          <Trends />
        </div>

        <div className=" rounded-b-2xl px-4 hover:bg-hover-trends flex items-center h-10 w-full text-btn-primary ">
          <Link to="www.trends.com">Show more</Link>
        </div>
      </div>
    </Widget>
  );
}
