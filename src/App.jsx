import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blank from "./pages/Blank";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Blank />} />
      </Routes>
    </>
  );
};

export default App;
