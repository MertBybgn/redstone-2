import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import "../../../src/style.css";
import useWindowSize from "../../components/useWindowSize";

export default function Navigation() {
  const size = useWindowSize();

  return (
    <div>
      <div className="flex  w-full justify-between   items-center   h-11  ">
        <h1 className=" w-52  text-btn-primary  "> Mert Baybağan</h1>
        {size.width < 750 ? null : <Search />}

        <Navbar />
      </div>
    </div>
  );
}
