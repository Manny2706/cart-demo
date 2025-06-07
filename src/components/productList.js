import React from "react"
import Product from "./product";

export default function productList(props) {
  return (
    props.product.length >0 ? (
  props.product.map((product, i) => {
    return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} index={i} />;
  })
):<h2 className="text-center mt-5">No Items in Cart</h2>
  );
}
