import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyOrdersChild from "./MyOrdersChild"
import {fetchOrders,deleteOrder} from "../redux/actions/orderAction"
import axios from "axios"

/**
 * Displays list of orders
 * @returns order component
 */
const MyOrders = () => {
  const [isInvalidOrder, setinValidOrder] = useState(false);
  const userLoggedin = useSelector((state) => state?.users?.usersList);
  const orders = useSelector((state) => state?.orders);
  const { userorders } = orders.confirmedShares;
  let dispatch = useDispatch();
  const { id } = userLoggedin[0];

 
 
 /**
   * to calculate total price
   * @returns sum value of Total shares bought
   */
  const totalPrice = () => {
    let sum = 0;
    userorders?.map((data) =>{
      sum = sum + data.totalPrice;   
    });
   
    return sum;
  };
  const totalQuantity = () => {
    let quantity = 0;
    userorders?.map((data) =>{
            quantity = quantity + data.quantity;
    });
    console.log(quantity)
    return quantity;
  };

  /**
   * @returns sell click dispatch action to redux
   */
  const sellClick=async(data,quantityValue)=>{
      // dispatch(deleteOrder(id,quantityValue));
      if(data.sellQuantity>0 && data.sellQuantity<= data.quantity){
        let quantity= data.quantity - data.sellQuantity;
        let totalPrice= data.totalPrice -  (data.sellQuantity*data.sharePrice)
        console.log(totalPrice);
        let items = {"quantity": quantity,"totalPrice":totalPrice}
        await axios.patch(`http://localhost:8000/userorders/${data.id}`,items);
        dispatch(fetchOrders(id));
      }
      else{
        
        setinValidOrder(true);
      }
     

  }



  /**
   * getting user orders from DB
   * @returns Dispatch get axios call
   */
  useEffect(() => {
    dispatch(fetchOrders(id));
  }, []);

  return (
      <MyOrdersChild userorders={userorders} sellClick={sellClick}
       totalQuantity={totalQuantity()}
      totalPrice={totalPrice()} isInvalidOrder={isInvalidOrder} setinValidOrder={setinValidOrder} />
  );
};

export default React.memo(MyOrders);