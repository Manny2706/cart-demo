import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/productList";
import React,{ useState } from 'react';
import Footer from "./components/Footer";
import AddItem from "./components/Additem.js";

function App() {
  const initialProductList = [
    {
      price:9999,
      name:"Iphone 14 Pro Max",
      quantity:0,
    },
    {
      price:9999,
      name:"redmi 10X",
      quantity:0,
    }
  ];
let [productList, setProductList] = useState(initialProductList);
let [totalPrice, setTotalPrice] = useState(0);
let [totalItems, setTotalItems] = useState(0);


  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalPrice = totalPrice;
    let newTotalItems = totalItems;
    newTotalPrice += newProductList[index].price;
    setTotalPrice(newTotalPrice);
    newProductList[index].quantity++
    setProductList(newProductList);
setTotalItems(++newTotalItems);
    
  };
    const decrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalPrice = totalPrice ;
let newTotalItems = totalItems;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalPrice -= newProductList[index].price;
      setTotalPrice(newTotalPrice);
       setProductList(newProductList);
    
    newTotalItems--;
    setTotalItems(newTotalItems);
    }
   
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.forEach((item) => {
      item.quantity = 0;
    });
    setProductList(newProductList);
    setTotalPrice(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalPrice = totalPrice;
    // Calculate the price to subtract before removing the item
    newTotalPrice -= (newProductList[index].quantity * newProductList[index].price);
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalPrice(newTotalPrice);
  };
const addItem = (name, price) => {
let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0
    });
    setProductList(newProductList);
}




  return (
    <>
      <Navbar totalItems={totalItems}/>
      <main className='container mt-5'>
        <AddItem  addItem={addItem}/>
        <ProductList 
          product={productList} 
          incrementQuantity={incrementQuantity} 
          decrementQuantity={decrementQuantity} 
          removeItem={removeItem}
        />
      </main>
      <Footer totalPrice={totalPrice} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
