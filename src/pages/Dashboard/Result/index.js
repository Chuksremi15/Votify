import React from "react";
import LineChart from "../../../components/chart";
import { AuthNav } from "../../../components/Navbar/Navbar";

const Result = () => {
  return (
    <div className="flex flex-col h-screen">
      <AuthNav />
      <div className="container mx-auto max-w-screen-xl flex-grow">
        <h1 className="text-xl font-medium mt-4 mb-1">Result</h1>
        <h1 className="text-xl  mb-4">Live election results feedback</h1>
        <LineChart />
      </div>
    </div>
  );
};

export default Result;
