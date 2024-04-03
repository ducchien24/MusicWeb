import React from "react";
import { NavLink } from "react-router-dom";
import logoMp3 from "../assets/logoMp3.svg";
import Path from "../ultis/path";
import { Sidebarmenu } from "../ultis/menu";

const notActiveStyle =
  "py-2 px-[25px] font-bold flex gap-4 item-center text-[#32323D] text-[13px]  ";
const activeStyle =
  "py-2 px-[25px] font-bold flex gap-4 item-center text-[#0F7070] text-[13px] bg-[#E7EDED]";
const SidebarLeft = () => {
  return (
    <div className="flex flex-col bg-[#DDE4E4] w-[240px]">
      <div className="w-full h-[70px] px-[15px] py-[15px] flex justify-start items-center">
        <img src={logoMp3} alt="logo" className="w-[120px]  object-contain" />
      </div>
      <div>
        {Sidebarmenu.map((item) => (
         
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
        
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle 

            }
          >
              {item.icon}
          <span>{item.text}</span>
       
          </NavLink>
          
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
