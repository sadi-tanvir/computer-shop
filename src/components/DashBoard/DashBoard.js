import React from "react";
import Areachart from "./Chart/AreaChart";
import Piechart from "./Chart/Piechart";
import MonthDetect from "./Chart/MonthDetect";

const DashBoard = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-20 mb-10">
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0 md:gap-x-16">
          {/* chart 1 */}
          <div className="flex flex-col justify-center items-center shadow-md hover:shadow-xl">
            <h2 className="text-xl font-bold text-cyan-800 text-center">
              Investment VS Revenue
            </h2>
            <Areachart />
          </div>

          {/* chart 2 */}
          <div className="flex flex-col justify-center items-center shadow-md hover:shadow-xl">
            <h2 className="text-xl font-bold text-red-800">
              Monthly Sales Analysis
            </h2>
            <div className="flex justify-center items-center">
              <Piechart />
              <MonthDetect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
