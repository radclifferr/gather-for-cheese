import React from "react";
import "../styles/Shop.css"
import { Link } from "react-router-dom"

const Shop = (props) => {
    return (
        <div className="shop-page"> 
            <h1 className="shop-header">Shop</h1>
            <div className="shop-container">
                {props.getItems.map((item, index) => {
                    return (
                    <div className="item-card-container" key= {item.itemNumber} >
                        <img src={item.images[0]} className="item-main-image" alt="" />
                        <div className="item-card-name">{item.itemName}</div>
                        <div className="item-card-price">${item.itemPrice}</div>
                        <Link to = {`/Shop/${item.itemName}` } state={item}><button className="general-button">See Item Details</button></Link>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Shop;