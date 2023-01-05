import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ProductCarousel.css"


const ProductCarousel = (props) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
  
    });
    const settingsMain = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    };
  
    const settingsThumbs = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      centerMode: true,
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: '10px'
    };
    return (
        <div className="slider-wrapper">
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
            >
            {props.images.map((slide) =>
            <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={slide} alt=""/>
            </div>
            )}

        </Slider>
        <div className="thumbnail-slider-wrap">
            <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>
            {props.images.map((slide) =>
                <div className="slick-slide" key={slide.id}>
                    <img className="slick-slide-image" src={slide} alt=""/>
                </div>
            )}
            </Slider>
        </div>
    </div>
    )
}

export default ProductCarousel