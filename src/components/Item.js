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
                </form>
                <button>Add To Cart</button>
            </div>
            

        </div>

    )
}

export default Item