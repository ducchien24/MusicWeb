import axios from "../ultis/axios";

export const getDetailSong = (sid) => new Promise( async(resolve,reject) => {
    try {
        const res = await axios(
            {
                url:'/infosong',
                method: 'get',
                params: { id : sid}
            }
        )
        resolve(res)
    } catch (error) {
        reject(error)
    }
});
export const getSong = (sid) => new Promise( async(resolve,reject) => {
    try {
        const res = await axios(
            {
                url:'/song',
                method: 'get',
                params: { id : sid}
            }
        )
        resolve(res)
    } catch (error) {
        reject(error)
    }
});

export const apiGetDetailPlayList = (pid) => new Promise( async(resolve,reject) => {
    try {
        const res = await axios(
            {
                url:'/detailplaylist',
                method: 'get',
                params: { id : pid}
            }
        )
        resolve(res)
    } catch (error) {
        reject(error)
    }
});