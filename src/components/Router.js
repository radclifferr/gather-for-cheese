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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";


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
        postNumber: 0,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "So good and so easy to make! This recipe is perfect for the Holiday season. As your family and friends gather around the table, their eyes and hands will naturally gravitate to the ooey-gooey strawberry-baked brie. This warm dish is by far our family’s favorite appetizer during the colder seasons. It brings us so much happiness that you and your friends/family can share in the joy we have experienced from gathering around this recipe. We love how easy this recipe is to make if you are running out of time at your next family event! As it just takes fifteen to twenty minutes, it’s the perfect go-to for a quick snack before everyone sits down for dinner. We are thrilled to share our secret of how to prepare it!",
        postRecipeDescription: 
        <div>
          <h3>Here's what you'll need</h3>
          <ul>
            <li>1 wheel of brie Cheese</li>
            <li>1 tube of pre-made crescent dough</li>
            <li>4 tbsp of stawberry jam</li>
            <li>Crackers to serve</li>
            <li>Your favorite bottle of wine (we recommend Sauvignon Blanc or Pinot Noir)</li>
          </ul>
          <h3>Here is how to make it</h3>
          <ol>
            <li>preheat oven to 350 degrees</li>
            <li>Unroll a tube of crescent dough onto greased cookie sheet. Place each piece of the dough into a star-like shape with the thicker base of the triangle facing toward the center. *See pictures below.</li>
            <li>Unwrap the brie from its container and place the wheel into the center of the crescent dough.</li>
            <li>Scoop the strawberry jam/cranberry sauce on the top of the brie.</li>
            <li>Gently fold the outer edges of the crescent dough toward the center of the brie cheese. Press the ends of the dough together as best as possible.</li>
            <li>Bake in the oven for 15-20 mins.</li>
            <li>Serve on a charcuterie board with crackers.</li>
          </ol>
        </div>,        
        
    },
    {
        postTitle: "The Best Baked Brie",
        postHeaderImage: blogPostOne,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "The best brie recipe for parties, you know its true",
        postRecipeDescription: "This is where the recipe will go",  
        postNumber: 1
    },
    {
        postTitle: "The Best Baked Brie",
        postHeaderImage: blogPostOne,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "The best brie recipe for parties, you know its true",
        postRecipeDescription: "This is where the recipe will go",  
        postNumber: 2 
    },
])
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/Shop" element = {<Shop getItems ={getItems} />} />
          <Route path = "/Shop/:Item" element = {<Item getItems ={getItems} />} />
        <Route path = "/Blog" element ={<Blog  getBlogPosts ={getBlogPosts} />} /> 
          <Route path = "/Blog/:BlogPost" element={<BlogPost getBlogPosts={getBlogPosts} />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Cart" element = {<Cart />} />
        <Route path = "/Shipping-Returns-Policy" element= {<ShippingReturns />} />
        <Route path = "/Terms-Of-Service-Policy" element= {<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;