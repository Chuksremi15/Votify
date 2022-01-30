import React from "react";
import { ElectionCard } from "../../../components/Card";
import { AuthNav } from "../../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <AuthNav />
      <div className="container mx-auto max-w-screen-xl flex-grow">
        <h1 className="text-xl font-medium mt-4 mb-1">Active Elections</h1>
        <div className="grid grid-cols-4 gap-x-4">
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
        </div>
        <h1 className="text-xl font-medium mt-4 mb-1">Completed Elections</h1>
        <div className="grid grid-cols-4 gap-x-4">
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
          <ElectionCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
