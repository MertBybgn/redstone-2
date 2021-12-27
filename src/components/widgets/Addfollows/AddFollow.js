import React from "react";
import Avatar from "../../Avatar";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
export default function AddFollow() {
  const Name = "Mert Baybağan";

  return (
    <Link to="mert">
      <div className="  hover:bg-hover-trends px-4  py-3 w-full  group h-auto mb-4  justify-between flex items-center ">
        <div className="flex  items-center gap-2">
          <div className=" flex justify-center items-center">
            <Avatar size="base" rounded="full" />
          </div>
          <div>
            <h3 className=" group-hover:underline  group-hover:decoration-1">
              {Name.length < 17 ? Name : Name.slice(0, 17) + "..."}
            </h3>
            <span className=" text-xs">@mertbaybagan</span>
          </div>
        </div>
        <div className="flex   ">
          <Button themes="follow">Follow</Button>
        </div>
      </div>
    </Link>
  );
}
