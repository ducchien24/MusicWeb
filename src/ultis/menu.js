import icons from './icon'
const {MdOutlineLibraryMusic,TbChartArcs,HiOutlineChartPie,MdOutlineFeaturedPlayList}=icons
export const Sidebarmenu =  [
    {   
        icon:<MdOutlineLibraryMusic size={24}/>,
        path:'library',
        text:'Thư viện'
    },
    {   
        icon:<TbChartArcs size={24}/>,
        path:'',
        end:true,
        text:'Khám phá'
    },
    {   
        icon:<HiOutlineChartPie size={24}/>,
        path:'zing-chart',
        text:'#zingchart'
    },
    {    
        icon:<MdOutlineFeaturedPlayList size={24}/>,
        path:'mymusic',
        text:'Cá nhân'
    }
]
