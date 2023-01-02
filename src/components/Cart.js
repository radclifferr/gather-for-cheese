import React from "react";
import "../styles/Cart.css"
import { Link } from "react-router-dom"

const Cart = (props) => {
    const EmptyCart = () => {
        return (
            <div>
                <h1>Your Shopping Cart Is Empty!</h1>
                <Link to = {`/Shop` }><button>Take me to the shop page</button></Link>
            </div>
        )
    }
    const FullCart = () => {
        return (
            <>
                <h1>Your Shopping Cart</h1>
                {props.getCart.map ((cartItem, index) => {
                    return(
                        <div className="cart-item-container">
                            <img className ="cart-image" src={cartItem.itemMainImage} alt="" />
                            <div>Item Name: {cartItem.itemName}</div>
                            <div>Item Price: ${cartItem.itemPrice}</div>
                            <div>Item Personalization: {cartItem.itemPersonalization}</div>
                            <button id= {index} onClick = {props.removeItemFromCart} >Remove From Cart</button>
                        </div>
                    
                    )
                })}
            </>
        )
    }
    if (props.getCart.length === 0){
        return (
            <EmptyCart/>
        )
    }else {
        return (
            <FullCart/>
        )

    }
}

export default Cart;