import React ,{useState}from "react";
import NavigationBar from "../ui/NavigationBar";
import { Button,Label } from "react-bootstrap";
import { Field } from "formik";
import SweetAlert from "react-bootstrap-sweetalert";

/**
 * Displays list of orders
 * @returns orderchild component
 * @params {array} objArray-list of orders
 * @params {function} sellClick- trigger parent sell order
 */
const MyOrdersChild=({totalPrice,totalQuantity,sellClick,userorders,isInvalidOrder,setinValidOrder})=>{
 const[quantityValue,setQuantity]=useState(0);
  /**
   * @returns triggers parent sell click
   */
    const sellClickTrigger=(data,quantityValue)=>{
         sellClick(data,quantityValue);
    }

    /**
   * @returns triggers parent sell click
   */
     const setInvalidTrigger=(isInvalid)=>{
      setinValidOrder(isInvalid);
 }
  
const updateQuantity=(newQuantity,index)=>{
  if(newQuantity==null || newQuantity==""){newQuantity=""}
     userorders[index].sellQuantity=newQuantity;
      setQuantity(newQuantity);

    }

    return (
        <>
          <NavigationBar/>
          {isInvalidOrder && (
            <SweetAlert
              show={isInvalidOrder}
              title="Not a Valid order,Please check Quantity!"
              onConfirm={() => setInvalidTrigger(false)}
            ></SweetAlert>
          )}
          <div class="row">
              <div class="col-md-8">
              {userorders != null && userorders.length > 0 ? (
        <div class="card" style={{ width: "40rem", margin: "20px" }}>
          <div class="card-header">
            <h4>My Orders</h4>
            {/* <h6>My shares:{totalQuantity}</h6>
            <h6>Shares worth:Rs.{totalPrice}</h6> */}
          </div>
          {userorders?.map((data,index) => (
            (data.quantity>0?(
            <div style={{ margin: "20px" }}>
              <h5 style={{ color: "blue" }}>Share Name: {data.shareName} </h5>
              <p>Number of Shares:  {data.quantity}</p>
              <p>Price:Rs.{data.totalPrice}</p>
            
             <div class="card-footer"><Button variant="danger" 
             onClick={()=>sellClickTrigger(data,quantityValue)}
                 id="sellButton">Sell Share</Button>
                <span class="label label-primary" style={{marginLeft:"10px"}}>Quantity:</span>
<input type="number" value={data.sellQuantity} key={index}
 onChange={e => updateQuantity(e.target.value,index)}  
 style={{marginLeft:"10px"}}></input>
                 </div>              
             </div>
            ):null)
          ))} 
          
        </div>
      ) : <h1>Book Shares</h1>
      }
              </div>
             <div class="col-md-4">
              <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <div class="card-header">
            <h4>Shares details</h4>
          </div>
          <div>
          <h5 style={{ color: "blue" }}>My shares:{totalQuantity}</h5>
          <h5 style={{ color: "blue" }}>Net worth:Rs.{totalPrice}</h5>

          </div>
          </div>
              </div>
          
          </div>
        </>
      );
}
export default React.memo(MyOrdersChild);
