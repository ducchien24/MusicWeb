import React,{memo} from 'react';
import icons from '../ultis/icon'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import * as actions from '../redux/actions'

const SongItem = ({songData}) => {
    const {CiMusicNote1}=icons
    const dispatch=useDispatch()
    // console.log(songData)
  return (

    <div className='flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer'
         onClick={() => {
          dispatch(actions.setCurSongId(songData.encodeId))
          dispatch(actions.play(true))
        }}
    >
      <div className='flex items-center gap-3 flex-1'>
        <span className=' text-gray-500'> <CiMusicNote1 size={18}/></span>
        <img src={songData?.thumbnail} alt='thumbnail' className='w-10 h-10 object-cover rounded-md' />
        <span className='flex flex-col w-full leading-[1.2]  text-gray-500'>
            <span className='text-sm font-semibold whitespace-nowrap'>{songData?.title.length>=23 ? `${songData?.title.slice(0,23)}...` :songData?.title}</span>
            <span >{songData?.artistsNames.length>=23 ? `${songData?.artistsNames.slice(0,23)}...` :songData?.artistsNames}</span>
        </span>
     
     </div>
     <div className='flex-1 flex justify-center items-center text-center text-[14px] leading-[2] ml-12  text-gray-500'>
     {songData?.album?.title}
     </div>
     <div className='flex-1 flex justify-end items-center  text-gray-500'>
     {moment.utc(songData?.duration*1000).format('mm:ss')}
     </div>
    </div>
    
  );
}

export default memo(SongItem);
