import '../styles/Router.css';
import Nav from "./Nav";
import Footer from "./Footer"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;