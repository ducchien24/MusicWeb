import React from 'react';
import icons from '../ultis/icon'
const {IoSearchOutline}= icons 

const Search = (props) => {
  return (
    <div className='w-full'>
       <div className='flex gap-3 h-[40px] overflow-hidden justify-between items-center border rounded-[24px] bg-[#C8D0D0] p-1 w-full' >
                <span className=' rounded-l-[24px]'>
                <IoSearchOutline size={24}/>
                </span>
                 <input 
                 type = 'text' 
                 placeholder='Tìm kiếm bài hát ,nghệ sĩ , lời bài hát...'  
                 className='bg-[#C8D0D0]  w-full text-gray-500 text-14px  rounded-r-[24px] h-[34px] py-1 leading-8 outline-none'  />
             </div>
    </div>
  );
}

export default Search;
