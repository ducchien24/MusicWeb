import { React, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icon";
import * as actions from "../redux/actions";
import { useDispatch } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Player = () => {
  const {
    FaRegHeart,
    FaHeart,
    BsThreeDots,
    MdSkipNext,
    MdSkipPrevious,
    CiShuffle,
    IoPlaySharp,
    IoPauseSharp,
    LuRepeat,
  } = icons;
  const thumbRef = useRef();
  const trackRef = useRef();
  const dispatch = useDispatch();
  const { curSongId, isPlaying } = useSelector((state) => state.curmusic);
  // console.log(isPlaying)
  const [songInfo, setSongInfo] = useState(null);
  // console.log("curSongId: ", curSongId);
  const [audio, setAudio] = useState(new Audio());
  const [curTime, setCurTime] = useState(null);
  // console.log(audioEl)

  //get detailsong and song when click song item
  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.getDetailSong(curSongId),
        apis.getSong(curSongId),
      ]);
      // console.log(res2);
      if (res1?.data?.err === 0) {
        setSongInfo(res1.data.data);
      }
      if (res2?.data?.err === 0) {
        audio.pause(); //pause afterstop getting new src
        setAudio(new Audio(res2.data.data["128"])); //Get data['128'] as source for audio tag
      } else {
        audio.pause();
        setAudio(new Audio());
        setCurTime(0);
        thumbRef.current.style.cssText = `right:100%`;
        dispatch(actions.play(false));
        console.log(songInfo);
        toast.warn(res2?.data.msg);
      }
      // console.log(songInfo);
    };
    fetchDetailSong();
  }, [curSongId]);

  //Operations with song when clicking on songItem =>change audio tag
  const intervalId = useRef(null);
  useEffect(() => {
    audio.load();
    if (isPlaying) {
      audio.play();
      intervalId.current = setInterval(() => {
        const percent =
          Math.round((audio.currentTime * 10000) / songInfo.duration) / 100;
        // console.log(percent);
        thumbRef.current.style.cssText = `right: ${100 - percent}%`;
        setCurTime(Math.round(audio.currentTime));
        // console.log(curTime, songInfo.duration);
      }, 200);
    }
    return () => clearInterval(intervalId.current);
  }, [audio]);

  const handTogglePlayMusic = () => {
    if (isPlaying) {
      audio.pause();
      dispatch(actions.play(false));
    } else {
      dispatch(actions.play(true));
      audio.play();
    }
  };
  const handClickProgressbar = (e) => {
   const trackRect= trackRef.current.getBoundingClientRect()
   console.log(trackRect)
   const percent= Math.round((e.clientX-trackRect.left)*10000/trackRect.width)/100

      console.log(percent)
    thumbRef.current.style.cssText = `right: ${100 - percent}%`;
 
    audio.currentTime=percent*songInfo.duration/100
  }
  return (
    <div className="flex px-5 h-full  ">
      <div className="w-[30%] flex  py-[20px] flex-auto items-center border gap-3 border-black">
        <img
          className="w-16 h-16 object-cover rounded-md"
          src={songInfo?.thumbnail}
          alt="thumbnail"
        ></img>
        <div className="flex flex-col gap-[3px]">
          <span className="font-semibold text-gray-700 text-sm">
            {songInfo?.title}{" "}
          </span>
          <span className="text-gray-500 text-xs">{songInfo?.artistsName}</span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            {" "}
            <FaRegHeart size={16} />{" "}
          </span>
          <span>
            {" "}
            <BsThreeDots size={16} />
          </span>
        </div>
      </div>
      <div className="min-w-[40vw] flex flex-col flex-auto border border-red-400 py-[20px] gap-2 justify-center items-center">
        <div className="flex gap-8 justify-center items-center pt-[4px] ">
          <span
            title="Bật phát ngẫu nhiên"
            className="opacity-[0.6] cursor-pointer"
          >
            <CiShuffle size={20} />{" "}
          </span>
          <span className="opacity-[0.6] cursor-pointer">
            <MdSkipPrevious size={24} />{" "}
          </span>
          <span
            className="rounded-full border border-slate-800 opacity-[0.8] p-1 cursor-pointer transition duration-200 ease-in-out hover:text-[#208888]"
            onClick={handTogglePlayMusic}
          >
            {isPlaying ? (
              <IoPauseSharp size={24} />
            ) : (
              <IoPlaySharp size={24} />
            )}
          </span>
          <span className="opacity-[0.6] cursor-pointer">
            <MdSkipNext size={24} />{" "}
          </span>
          <span
            title="Bật phát tất cả"
            className="opacity-[0.6] cursor-pointer"
          >
            <LuRepeat size={20} />{" "}
          </span>
        </div>
        <div className="flex w-full justify-center gap-4 items-center ">
          <span>{moment.utc(curTime * 1000).format("mm:ss")}</span>
          <div
              ref={trackRef} 
              className=" w-3/5 hover:h-[8px] h-[6px] cursor-pointer border rounded-l-full rounded-r-full relative bg-[rgba(0,0,0,0.1)]"
              onClick={handClickProgressbar}>
            <div
              ref={thumbRef}
              className="absolute top-0 left-0 bottom-0 border rounded-l-full rounded-r-full  bg-[#0e8080]"
            ></div>
          </div>
          <span>{moment.utc(songInfo?.duration * 1000).format("mm:ss")}</span>
        </div>
      </div>
      <div className="w-[30%] py-[20px] flex justify-end gap-8  items-center">
        <span> c</span>
        <span> c</span>
        <span> c</span>
        <span> c</span>
        <span> c</span>
        <span> c</span>
        <span> c</span>
      </div>
    </div>
  );
};

export default Player;
