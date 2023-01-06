import React from "react";
import "../styles/Home.css"

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-size-wrapper">
                <img src={require("../images/hero-image-one.jpeg")} alt="" className="left-hero-image"/>
                <div className="hero-copy">
                    <div className="welcome">Welcome to Gather for Cheese</div>
                    <div className="welcome-copy">Custom cutting boards and charcuterie boards for that special someone in your life</div>
                    <img src={require("../images/hero-image-two.jpeg")} alt="" className="right-hero-image" />
                </div>
                <img src={require("../images/explore-cutting-boards.jpeg")} alt="" className="explore-images left" />
                <img src={require("../images/explore-charcuterie-boards.jpg")} alt="" className="explore-images right" />
            </div>
        </div>

    )
}

export default Home;