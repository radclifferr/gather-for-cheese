import '../styles/Router.css';
import Nav from "./Nav";
import Footer from "./Footer"
import Home from "./Home"
import Shop from "./Shop"
import Blog from "./Blog"
import Contact from "./Contact"
import ReturnsRefunds from "./ReturnsRefunds"
import TermsOfService from "./TermsOfService"
import Cart from "./Cart"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/Shop" element = {<Shop />} />
        <Route path = "/Blog" element ={<Blog />} /> 
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Cart" element = {<Cart />} />
        <Route path = "/Returns-Refunds-Policy" element= {<ReturnsRefunds />} />
        <Route path = "/Terms-Of-Service" element= {<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;