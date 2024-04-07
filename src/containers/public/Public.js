import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight, Player ,Header} from "../../components/";
const Public = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-layout-bg">
      <div className="flex flex-auto w-full h-full">
        <div className=" w-[240px]">
          <SidebarLeft />
        </div>
        <div className="flex-auto border border-red-500">
          <Header />
          <Outlet />
        </div>
        <div className="w-[329px] hidden 1600:flex border border-blue-500 animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div  className="w-full fixed bottom-0 left-0 right-0 h-[90px] bg-player-bg">
        <Player />
      </div>
    </div>
  );
};

export default Public;
