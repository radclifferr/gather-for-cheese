import '../styles/Router.css';
import Nav from "./Nav";
import Footer from "./Footer"
import Home from "./Home"
import Shop from "./Shop"
import Blog from "./Blog"
import BlogPost from "./BlogPost"
import Contact from "./Contact"
import ShippingReturns from "./ShippingReturns"
import TermsOfService from "./TermsOfService"
import Cart from "./Cart"
import Item from "./Item"
import shopItems from "./shopItems"
import blogPosts from "./blogPosts"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";


const Router = () => {
  const [getCart, setCart] = useState([])

  const addItemToCart= (product, personalValue) => {
    const tempCart = getCart
    console.log(personalValue)
    console.log(product)
    product.itemPersonalization = personalValue
    tempCart.push(product)
    console.log(tempCart)
    setCart(tempCart)
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/Shop" element = {<Shop getItems ={shopItems} />} />
          <Route path = "/Shop/:Item" element = {<Item getItems ={shopItems} getCart={getCart} setCart={setCart} addItemToCart={addItemToCart} />} />
        <Route path = "/Blog" element ={<Blog  getBlogPosts ={blogPosts} />} /> 
          <Route path = "/Blog/:BlogPost" element={<BlogPost getBlogPosts={blogPosts} />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Cart" element = {<Cart getCart={getCart} setCart={setCart} />} />
        <Route path = "/Shipping-Returns-Policy" element= {<ShippingReturns />} />
        <Route path = "/Terms-Of-Service-Policy" element= {<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;