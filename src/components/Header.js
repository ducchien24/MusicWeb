import React from "react";
import icons from "../ultis/icon";
import { Search } from "../components/";
import { CiSettings } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

const { HiArrowNarrowRight, HiArrowNarrowLeft } = icons;
const Header = () => {
  return (
    <div className="flex justify-between items-center w-full my-2 bg-layout-header-bg overflow-auto px-[60px] mb-4">
      <div className="flex gap-3 items-center w-full">
        <div className="flex gap-4 text-[#DDE4E4]">
          <HiArrowNarrowLeft size={24} />
          <HiArrowNarrowRight size={24} />
        </div>
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div className="flex justify-end w-full gap-3 max-h-[40px] whitespace-nowrap ">
        <div className="rounded-[100px] bg-[#208888] flex mr-[12px] py-[10px] px-[20px] text-[white] font-bold text-[14px] ">
          <a href="https://zingmp3.vn/vip/upgrade?src_vip=114">
            Nâng cấp tài khoản{" "}
          </a>
        </div>
        <a
          className="flex py-[10px] px-[24px] items-center rounded-3xl bg-alpha-bg text-[#0D7373] text-[14px] font-bold gap-2"
          href="https://github.com/zmp3-pc/zmp3-pc/releases/download/v1.1.7/Zing-MP3-Setup-1.1.7.exe"
        >
          <i><FaDownload size={18} /></i>
          <span>Tải bản Windown</span>
        </a>
        <div className="rounded-full bg-alpha-bg p-[8px]">
          <CiSettings size={24} />
        </div>
        <div className="w-[38px] h-[38px]  bg-alpha-bg rounded-full">
          <img
            className="w-[38px] h-[38px] rounded-full "
            src="https://i.pinimg.com/originals/6b/f2/6f/6bf26f27a7c025d3abd46d0c85caf33e.jpg"
            alt="avt"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
