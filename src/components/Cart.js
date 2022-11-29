import React from "react";
import "../styles/Cart.css"

const Cart = (props) => {
    return (
        props.getCart.map ((cartItem, index) => {
            return(
                <div className="cart-item-container">
                    <img className ="cart-image" src={cartItem.itemMainImage} alt="" />
                    <div>Item Name: {cartItem.itemName}</div>
                    <div>Item Price: ${cartItem.itemPrice}</div>
                    <div>Item Personalization: {cartItem.itemPersonalization}</div>
                    <button>Remove From Cart</button>
                </div>
            
            )
        })
    )
}

export default Cart;