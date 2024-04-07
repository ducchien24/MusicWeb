import React,{memo} from 'react';
import SongItem from './SongItem'
import icons from '../ultis/icon'
import moment from 'moment'
const ListSong = ({songs,totalDuration}) => {
  const {BsDot}=icons
    // console.log({songs,totalDuration})
  return (
    <div className='w-full flex flex-col text-xs p-[10px]' >
       <div className='flex justify-between items-center text-gray-600 px-[10px] font-semibold' >
         <span className='ml-5'>BÀI HÁT</span>
         <span >ALBUM</span>
         <span >THỜI GIAN</span>
     </div>
     <div className='flex flex-col'>
        
        { songs?.map(item=>(
                <SongItem key={item.encodeId} songData={item}/>         
            ))
        }
     </div>
     <span className='flex items-center gap-1 py-[10px] border-t border-[rgba(0,0,0,0.05)] text-gray-600'>
      <span>{`${songs?.length} bài hát `}</span>
      <BsDot size={20}/>
      <span>{moment.utc(totalDuration*1000).format('HH [giờ] mm [phút] ss [giây]')}</span>
     </span>
    </div>
  );
}

export default memo(ListSong);
