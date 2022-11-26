import React, {useState} from "react";

import "../styles/Shop.css"
import heroImageOne from "../images/hero-image-one.jpg"




const Shop = () => {
    const [getItems, setItems] = useState([
        {
            itemName: "Cutting Board 1",
            itemDescription: "This cutting board is great", 
            itemMainImage: heroImageOne,
            itemPrice: 200, 
            
        },
        {
            itemName: "Cutting Board 1",
            itemDescription: "This cutting board is great", 
            itemMainImage: heroImageOne,
            itemPrice: 350, 
            itemNumber: 2
        },
        {
            itemName: "Cutting Board 1",
            itemDescription: "This cutting board is great", 
            itemMainImage: heroImageOne,
            itemPrice: 152,
            itemNumber: 3
        },
        {
            itemName: "Cutting Board 1",
            itemDescription: "This cutting board is great", 
            itemMainImage: heroImageOne, 
            itemPrice: 175,
            itemNumber: 4
        },
        
    ])
    return (
        <div className="shop-page">
            <h1 className="shop-header">Shop</h1>
            <div className="shop-container">
                {getItems.map((item, index) => {
                    return (
                    <div className="item-card-container" key= {item.itemNumber} >
                        <img src={item.itemMainImage} className="item-main-image" alt="" />
                        <div className="item-card-name">{item.itemName}</div>
                        <div className="item-card-price">${item.itemPrice}</div>
                        <button>See Item Details</button>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Shop;