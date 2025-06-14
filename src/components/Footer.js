import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom bg-light p-3">
      <button className="btn btn-danger col-2" onClick={()=>
        props.resetQuantity()
      } >Reset</button>
      <div className="col-8 text-center bg-dark text-white "> Total Price: ₹{props.totalPrice} </div>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  );
}
