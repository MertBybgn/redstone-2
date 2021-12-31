import React from "react";
import Avatar from "../../components/Avatar";
import BackgroundImg from "../../components/BackgroundImg";
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
          <div className="flex  pb-2  justify-center">
            <span className=" ">Web Yazılımcı olmak isteyen biri</span>
          </div>
        </Widget>
      </div>
    </div>
  );
}
