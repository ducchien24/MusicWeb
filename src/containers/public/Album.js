import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment";
import {ListSong} from '../../components'
import { Scrollbars } from 'react-custom-scrollbars-2';
const Album = () => {
  const { pid } = useParams();
  const [playListData, setPlayListData] = useState({});
  //   console.log(title,pid)
  useEffect(() => {
    const fetchDetailPlayList = async () => {
      const res = await apis.apiGetDetailPlayList(pid);
      console.log(res);
      if (res?.data.err === 0) {
        setPlayListData(res?.data.data);
      }
    };
    fetchDetailPlayList();
    console.log(playListData);
   
  }, [pid]);

  return (
    
    <div className="overflow-auto px-[60px] flex h-full  gap-8  w-full ">
      <div className="left_playlist w-1/4 border border-red-500 flex flex-col items-center gap-2">
        <img
          src={playListData.thumbnail}
          alt="thumbnail"
          className="w-full object-contain rounded-md "
        ></img>
        <div className="flex flex-col justify-center items-center leading-[1.75]">
          <h3 className="text-[20px] font-bold  text-gray-600">
            {playListData.title}
          </h3>
          <span className="flex gap-2 text-[12px]  text-gray-500">
            <span>Cập nhật: </span>{" "}
            <span>
              {moment
                .unix(playListData?.contentLastUpdate)
                .format("DD/MM/YYYY")}
            </span>
          </span>
          <div className='text-[12px] text-gray-500 text-center'>{playListData.artistsNames}</div>
          <span className='text-[12px] text-gray-500'>{`${Math.round(playListData?.like/1000)}K người yêu thích`}</span>
        </div>
      </div>
      <Scrollbars style={{ width: '100%', height: '80%' }}>
      <div className="right_playlist flex-auto border border-red-500">
        <span className='text-sm'>
        <span className='text-gray-500 px-[10px]'>Lời tựa </span>
        <span className='text-gray-600 font-medium'>{playListData.description}</span>
        </span>
           <ListSong songs={playListData?.song?.items} totalDuration={playListData?.song?.totalDuration}/>  
          <span></span> 
      </div>
      </Scrollbars>
    </div>
   
  );
};

export default Album;
