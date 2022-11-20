import '../styles/Router.css';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;