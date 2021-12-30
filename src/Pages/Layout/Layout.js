import React from "react";
import Navigation from "../Navigation/Navigation";
import ExtraSidebar from "./ExtraSidebar";
import Sidebar from "./Sidebar";
import useWindowSize from "../../components/useWindowSize";
export default function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className="   text-white  font-raleway text-sm   container  mx-auto h-full ">
      <Navigation />
      <div className="flex mt-4">
        {size.width > 750 ? (
          <div className=" w-[300px]">
            <Sidebar />
          </div>
        ) : null}

        <div className=" border-x-2  border-text-color mx-4 flex-1 w-auto">
          {children}
        </div>

        {size.width > 750 ? (
          <div className=" w-[332px] ">
            <ExtraSidebar />
          </div>
        ) : null}
      </div>
    </div>
  );
}
