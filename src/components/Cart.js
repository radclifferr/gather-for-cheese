import React from "react";
import "../styles/Cart.css"
import { Link } from "react-router-dom"

const Cart = (props) => {
    const EmptyCart = () => {
        return (
            <div>
                <h1>Your Shopping Cart Is Empty!</h1>
                <Link to = {`/Shop`}><button className="general-button">Take me to the shop page</button></Link>
            </div>
        )
    }
    const FullCart = () => {
        return (
            <div className="cart">
                <h1>Your Shopping Cart</h1>
                {props.getCart.map ((cartItem, index) => {
                    return(
                        <div className="cart-item-container">
                            <img className ="cart-image" src={cartItem.images[0]} alt="" />
                            <div>
                                <div>Product</div>
                                <div>{cartItem.itemName}</div>
                            </div>
                            <div>
                                <div>Item Price</div>
                                <div>${cartItem.itemPrice}</div>
                            </div>
                            <div>
                                <div>Item Personalization: {cartItem.itemPersonalization}</div>
                            </div>
                            <button id= {index} onClick = {props.removeItemFromCart} >Remove From Cart</button>
                        </div>
                    )
                })}
                <div className="upsell-container">
                    <h2>You may also be interested in</h2>
                    

                </div>
                <div className="cart-total-container">
                    <h2>Cart totals</h2>
                    <div className="total-item">
                        <div>Subtotal: </div>
                        <div>$$$$$</div>
                    </div>
                    <div className="total-item">
                        <div>Shipping: </div>
                        <div>Free shipping</div>
                    </div>
                    <div className="total-item">
                        <div>Total: </div>
                        <div>$$$100000</div>
                    </div>
                    <button className="general-button">Proceed to checkout</button>
                </div>

            </div>
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