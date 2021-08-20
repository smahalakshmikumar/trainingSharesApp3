import axios from "axios";
import * as api from "../../api/api"
import {
    ADD_TO_SHARE_ORDER,REMOVE_FROM_SHARE_ORDER,FETCH_SUCCESS_ORDERS
} from "./actionTypes";


/**
 * post order action
 * @param {array} order- to post particular share order
 * @returns post order
 */
 export const postShareOrder = (order) => {
  return (async(dispatch, state) => {
    try{
      let response= await api.postData("userorders", order)
      console.log(response.data)

    }
    catch(err){
    }
});
};

/**
 * post order action
 * @param {array} order- to fte particular share order
 * @returns post order
 */
 export const fetchOrders = (id) => {
  return (async(dispatch, state) => {
    try{
      let response= await api.getData(`users/${id}?_embed=userorders`)
      dispatch(fetchOrderSuccess(response.data));
    }
    catch(err){
    }
});
};

/**
 * remove item
 * @param {number} id- remove item
 * @returns delete order
 */
//  export const deleteOrder = (dataName,id) => {
//   return (async(dispatch, state) => {
//     try{
//       let response=await axios.delete("http://localhost:8000/userorders/?shareName=Devyani")
//       console.log(response.data)
//       fetchOrders(id);
//     }
//     catch(err){
//     }
// });
// };


/**
 * fetch success action
 * @param {array} data- upon success response
 * @param {object} options-optional params
 * @returns FETCH_SUCCESS_ORDERS
 */
 export const fetchOrderSuccess = (data, options = {}) => {
  return { type: FETCH_SUCCESS_ORDERS, payload: data};
};

