import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "../Pages/Example/Example";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout/Layout";

function AppRouter() {
  return (
    <div className=" bg-body-color a23sss h-full">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Example" element={<Example />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
