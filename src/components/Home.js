import React from "react";
import "../styles/Home.css"
import heroImageOne from "../images/hero-image-one.jpg"
import heroImageTwo from "../images/hero-image-two.jpg"
import exploreCuttingBoards from "../images/explore-cutting-boards.jpg"
import exploreCharcuterieBoards from "../images/explore-charcuterie-boards.jpg"

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-size-wrapper">
                <img src={heroImageOne} alt="" className="left-hero-image"/>
                <div className="hero-copy">
                    <div className="welcome">Welcome to Gather for Cheese</div>
                    <div className="welcome-copy">Custom cutting boards and charcuterie boards for that special someone in your life</div>
                    <img src={heroImageTwo} alt="" className="right-hero-image" />
                </div>
                <img src={exploreCuttingBoards} alt="" className="explore-images left" />
                <img src={exploreCharcuterieBoards} alt="" className="explore-images right" />
            </div>
        </div>

    )
}

export default Home;