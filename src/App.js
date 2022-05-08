import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reviews from "./components/Review/Reviews";
import DashBoard from "./components/DashBoard/DashBoard";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
