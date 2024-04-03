import React from "react";

const Player = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[30%]  py-[20px] justify-start items-center">
        <span> a</span>
      </div>
      <div className="min-w-[40vw] py-[20px] flex justify-center items-center">
        <span> b</span>
      </div>
      <div className="w-[30%] py-[20px] flex justify-end  items-center">
        <span> c</span>
      </div>
    </div>
  );
};

export default Player;
