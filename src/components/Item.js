import React from "react";
import { useLocation, Link } from "react-router-dom"
import "../styles/Item.css"

const Item = (props) => {
    const location = useLocation()
    const index = location.state.itemNumber
    let product = props.getItems[index]
    return (
        <div className="item-page-container">
            <img src={product.itemMainImage} alt=""  className="product-image"/>
            <div>
                <div>{product.itemName}</div>
                <div>{product.itemDescription}</div>
                <div>${product.itemPrice}</div>
                <form>
                    <label htmlFor ="personalization">Enter your product personalization: </label>
                    <input type="text" id="personalization" maxLength={20} required/>
                </form>
                <button onClick = {() => props.addItemToCart(product)}>Add To Cart</button>
            </div>
            

        </div>

    )
}

export default Item