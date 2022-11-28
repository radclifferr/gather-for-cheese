import '../styles/Router.css';
import Nav from "./Nav";
import Footer from "./Footer"
import Home from "./Home"
import Shop from "./Shop"
import Blog from "./Blog"
import Contact from "./Contact"
import ShippingReturns from "./ShippingReturns"
import TermsOfService from "./TermsOfService"
import Cart from "./Cart"
import Item from "./Item"
import heroImageOne from "../images/hero-image-one.jpg"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";


const Router = () => {
  const [getItems, setItems] = useState([
    {
        itemName: "Cutting Board 1",
        itemDescription: "This cutting board is great", 
        itemMainImage: heroImageOne,
        itemPrice: 200, 
        itemNumber: 0,
        itemPersonalization: "",
    },
    {
        itemName: "Cutting Board 1",
        itemDescription: "This cutting board is great", 
        itemMainImage: heroImageOne,
        itemPrice: 350, 
        itemNumber: 1,
        itemPersonalization: ""
    },
    {
        itemName: "Cutting Board 1",
        itemDescription: "This cutting board is great", 
        itemMainImage: heroImageOne,
        itemPrice: 152,
        itemNumber: 2,
        itemPersonalization: ""
    },
    {
        itemName: "Cutting Board 1",
        itemDescription: "This cutting board is great", 
        itemMainImage: heroImageOne, 
        itemPrice: 175,
        itemNumber: 3,
        itemPersonalization: ""
    },
    
  ])  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/Shop" element = {<Shop getItems ={getItems} />} />
        <Route path = "/Blog" element ={<Blog />} /> 
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Cart" element = {<Cart />} />
          <Route path = "/Shop/:Item" element = {<Item getItems ={getItems} setItems = {setItems} />} />
        <Route path = "/Shipping-Returns-Policy" element= {<ShippingReturns />} />
        <Route path = "/Terms-Of-Service-Policy" element= {<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;