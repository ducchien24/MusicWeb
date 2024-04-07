import { actionTypes } from "./actionTypes";

export const setCurSongId = (sid) => ({
    type: actionTypes.SET_CUR_MUSIC,
    sid
})
export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag
})
