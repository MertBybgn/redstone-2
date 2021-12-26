import React from "react";
import Navigation from "../Navigation/Navigation";
import ExtraSidebar from "./ExtraSidebar";
import Sidebar from "./Sidebar";
import useWindowSize from "../../components/useWindowSize";
export default function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className=" w-full h-full ">
      <Navigation />
      <Sidebar />
      <div>
        width
        {children} {size.width}px / {size.height}px
      </div>
      {size.width > 750 ? <ExtraSidebar /> : <div> küçük</div>}
    </div>
  );
}
