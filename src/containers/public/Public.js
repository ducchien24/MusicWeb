import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight, Player } from "../../components/";
const Public = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#CED9D9]">
      <div className="flex flex-auto w-full h-full">
        <div className=" w-[240px]">
          <SidebarLeft />
        </div>
        <div className="flex-auto border border-red-500">
          <Outlet />
        </div>
        <div className="w-[329px] hidden 1600:flex border border-blue-500 animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div  className="w-full flex-none h-[90px] bg-red-500 ">
        <Player />
      </div>
    </div>
  );
};

export default Public;
