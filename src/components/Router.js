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
import heroImageOne from "../images/hero-image-one.jpg"
import blogPostOne from "../images/blog-post-one.jpg"
import blogPostTwo from "../images/blog-post-one.jpg"
import Recipe from '../Recipes/recipe.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";


const Router = () => {
  const [getItems] = useState([
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
  const [getBlogPosts] = useState([
    {
        postTitle: "Quick and Easy Strawberry Baked Brie",
        postHeaderImage: blogPostOne,
        postSecondaryImage: blogPostTwo,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "So good and so easy to make! This recipe is perfect for the Holiday season. As your family and friends gather around the table, their eyes and hands will naturally gravitate to the ooey-gooey strawberry-baked brie. This warm dish is by far our family’s favorite appetizer during the colder seasons. It brings us so much happiness that you and your friends/family can share in the joy we have experienced from gathering around this recipe. We love how easy this recipe is to make if you are running out of time at your next family event! As it just takes fifteen to twenty minutes, it’s the perfect go-to for a quick snack before everyone sits down for dinner. We are thrilled to share our secret of how to prepare it!",       
        postRecipeDescription: <Recipe />,
    },
    {
        postTitle: "The Best Baked Brie",
        postHeaderImage: blogPostOne,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "The best brie recipe for parties, you know its true",
        postRecipeDescription: "This is where the recipe will go"
    },
    {
        postTitle: "The Best Baked Brie",
        postHeaderImage: blogPostOne,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "The best brie recipe for parties, you know its true",
        postRecipeDescription: "This is where the recipe will go"
    },
])
  const [getCart, setCart] = useState([])

  const addItemToCart= (product) => {
    const tempCart = getCart
    tempCart.push(product)
    setCart(tempCart)
  }


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/Shop" element = {<Shop getItems ={getItems} />} />
          <Route path = "/Shop/:Item" element = {<Item getItems ={getItems} getCart={getCart} setCart={setCart} addItemToCart={addItemToCart} />} />
        <Route path = "/Blog" element ={<Blog  getBlogPosts ={getBlogPosts} />} /> 
          <Route path = "/Blog/:BlogPost" element={<BlogPost getBlogPosts={getBlogPosts} />} />
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