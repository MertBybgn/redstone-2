import React from "react";
import Avatar from "../../components/Avatar";
import BackgroundImg from "../../components/BackgroundImg";
import { Link } from "react-router-dom";
import Widget from "../../components/Widget";
export default function Sidebar() {
  return (
    <div>
      <div>
        <Widget>
          <div className=" relative mb-8">
            <div className="flex justify-center">
              <div className=" absolute  top-8  ">
                <Avatar size="base" rounded="full" />
              </div>
            </div>
            <BackgroundImg size="sm" />
          </div>
          <div className="flex mb-2  justify-center">
            <h1 className=" text-base">Mert Baybağan</h1>
          </div>
          <div className="flex   justify-center">
            <span className=" text-xs">Web Yazılımcı olmak isteyen biri</span>
          </div>
        </Widget>

        <Widget>
          <h1 className="flex items-center  text-lg justify-center">
            {" "}
            Gruplar
          </h1>
          <ul>
            <li className=" py-1 border-t-2 border-btn-primary w-ful group">
              <Link to="">
                <div className="flex  justify-center p-1 gap-2  items-center ">
                  <Avatar size="sm" />
                  <h2>Front-end Konya</h2>
                  <span className=" text-2xl group-hover:text-btn-primary">
                    {">"}
                  </span>
                </div>
              </Link>
            </li>
            <li className=" py-1 border-t-2 border-btn-primary w-ful group">
              <Link to="">
                <div className="flex  justify-center p-1 gap-2  items-center ">
                  <Avatar size="sm" />
                  <h2>Front-end Konya</h2>
                  <span className=" text-2xl group-hover:text-btn-primary">
                    {">"}
                  </span>
                </div>
              </Link>
            </li>
            <li className=" py-1 border-t-2 border-btn-primary w-ful group">
              <Link to="">
                <div className="flex  justify-center p-1 gap-2  items-center ">
                  <Avatar size="sm" />
                  <h2>Front-end Konya</h2>
                  <span className=" text-2xl group-hover:text-btn-primary">
                    {">"}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </Widget>
      </div>
    </div>
  );
}
