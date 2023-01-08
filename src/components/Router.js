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
import blogPostObject from "./blogPostObject"

import { HashRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";


const Router = () => {
  const [getCart, setCart] = useState([])

  const addItemToCart= (product, personalValue) => {
    const tempCart = [...getCart]
    product.itemPersonalization = personalValue
    tempCart.push(product)
    setCart(tempCart)
  }
  const removeItemFromCart = (e) => {
    const tempCart = [...getCart]
    tempCart.splice(e.target.id,1)
    setCart(tempCart)
  }

  return (
    <HashRouter>
      <Nav getCart={getCart}/>
      <Routes>
        <Route path ="/" element ={<Home />} activeClassName="active" />
        <Route path ="/Shop" element = {<Shop getItems ={shopItems} />} />
          <Route path = "/Shop/:Item" element = {<Item getItems ={shopItems} getCart={getCart} setCart={setCart} addItemToCart={addItemToCart} />} />
        <Route path = "/Blog" element ={<Blog  getBlogPosts ={blogPostObject} />} /> 
          <Route path = "/Blog/:BlogPost" element={<BlogPost getBlogPosts={blogPostObject} />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Cart" element = {<Cart getCart={getCart} setCart={setCart} removeItemFromCart={removeItemFromCart}/>} />
        <Route path = "/Shipping-Returns-Policy" element= {<ShippingReturns />} />
        <Route path = "/Terms-Of-Service-Policy" element= {<TermsOfService />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default Router;