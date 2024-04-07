import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArrIndex } from "../ultis/fn";
import * as action from "../redux/actions";
import {useNavigate} from 'react-router-dom'
const Slider = () => {
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state.app);
  // console.log('state',useSelector((state) => state.app))
  // console.log("banner :", banner);
  const [listArr, setListArr] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    let INDEX_START_IMG = 0;
    let INDEX_END_IMG = 2;
    // hiện ra banner [0,2] ngay khi load 
    if (banner?.length > 0) {
      let arrListFirst = getArrIndex(INDEX_START_IMG, INDEX_END_IMG, banner.length - 1);
      setListArr(arrListFirst);
    }
    //xử lý slide chạy
    const intervalId = setInterval(() => {
      var list = getArrIndex(INDEX_START_IMG, INDEX_END_IMG, banner?.length - 1);
      setListArr(list);
      INDEX_START_IMG =
        (INDEX_START_IMG === banner.length - 1) ? 0 : INDEX_START_IMG + 1;
      INDEX_END_IMG =
        (INDEX_END_IMG === banner.length - 1) ? 0 : INDEX_END_IMG + 1;
      // console.log({ INDEX_START_IMG, INDEX_END_IMG });
    }, 6000);
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [banner.length]);
  const handClickBanner = (item) => {
    if (item?.type === 1) dispatch(action.setCurSongId(item.encodeId));
    if (item?.type === 4) {
        // console.log(item)
        const linkPlayList= item?.link.split('.')[0];
        console.log(linkPlayList)
        navigate(linkPlayList)
    }
  };
  return (
    <div className="flex gap-3 w-full overflow-hidden pt-[33px] ">
      {listArr?.map((item_list, index) => {
        return (
          <img
            key={banner[item_list].encodeId}
            src={banner[item_list].banner}
            onClick={() => handClickBanner(banner[item_list])}
            className={`${
              index === 0
                ? "side-left animate-slide-left z-10 "
                : index === 1
                ? "side-middle animate-slide-left2 z-10"
                : "side-right animate-slide-right z-20"
            } flex-1 object-contain w-[29%] rounded-lg`}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default Slider;
