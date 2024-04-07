import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Path from "../ultis/path";
import { Sidebarmenu } from "../ultis/menu";
import {useNavigate} from 'react-router-dom';


const notActiveStyle =
  "py-2 px-[25px] font-bold flex gap-4 item-center text-[#32323D] text-[13px]  ";
const activeStyle =
  "py-2 px-[25px] font-bold flex gap-4 item-center text-[#0F7070] text-[13px] bg-alpha-bg";
const SidebarLeft = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col bg-sidebar-bg w-[240px]">
      <div className="w-full h-[70px] px-[15px] py-[15px] flex justify-start items-center cursor-pointer"
       onClick={() => navigate(Path.HOME)}>
        <img src={logo} alt="logo" className="w-[120px]  object-contain" />
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
