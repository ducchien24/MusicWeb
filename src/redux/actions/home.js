import { actionTypes } from "./actionTypes";
import * as apis from "../../apis";

export const getHome = () => async (dispath) => {
  try {
    const responsive = await apis.getHome();
    if (responsive?.data.err === 0) {
      dispath({
        type: actionTypes.GET_HOME,
        homeData: responsive.data.data.items,
      });
    } else {
      dispath({
        type: actionTypes.GET_HOME,
        homeData: null,
      });
    }
  } catch (error) {
    dispath({
      type: actionTypes.GET_HOME,
      homeData: null,
    });
  }
};

// export const getHome = async() => {
//   try {
//     const responsive = await apis.getHome();
//     if (responsive?.data.err === 0) {
//       return {
//         type: actionTypes.GET_HOME,
//         homeData: responsive.data.data.items,
//       };
//     } else {
//        return {
//         type: actionTypes.GET_HOME,
//         homeData: null,
//       };
//     }
//   } catch (error) {
//     return {
//       type: actionTypes.GET_HOME,
//       homeData: null,
//     };
//   }
// };
