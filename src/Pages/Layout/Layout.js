import React from "react";
import Navigation from "../Navigation/Navigation";
import ExtraSidebar from "./ExtraSidebar";
import Sidebar from "./Sidebar";
import useWindowSize from "../../components/useWindowSize";

export default function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className="  layout   ">
      <Navigation />
      <div className="flex mt-4">
        {size.width > 750 ? (
          <div className=" w-[300px]">
            <Sidebar />
          </div>
        ) : null}

        <div className="main ">{children}</div>

        {size.width > 1200 ? (
          <div className=" w-[332px] ">
            <ExtraSidebar />
          </div>
        ) : null}
      </div>
    </div>
  );
}
