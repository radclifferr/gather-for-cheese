import React from "react";
import "../styles/Cart.css"
import { Link } from "react-router-dom"
import shopItems from "./shopItems"

const Cart = (props) => {
    const RandomItem = () => {
        const index = Math.floor(Math.random() * shopItems.length)
        const randomShopItem = shopItems[index]
        return (
            <div className="upsell-container">
                <img src={randomShopItem.images[0]} className="cart-image upsell-image" alt=""></img>
                <div>{randomShopItem.itemName}</div>
                <Link to = {`/Shop/${randomShopItem.itemName}` } state={{index}}><button className="general-button">See Item Details</button></Link>
            </div>
        )
    }
    const CartSubtotal = () => {
        let cartSubTotal = 0
        for(let i=0; i<props.getCart.length; i++) {
            cartSubTotal +=props.getCart[i].itemPrice
        }
        return <div>${cartSubTotal}</div>
    }
    const FullCart = () => {
        return (
            <div className="cart-center-container">
                <div className="cart">
                    <h1>Your Shopping Cart</h1>
                    {props.getCart.map ((cartItem, index) => {
                        return(
                            <div className="cart-item-container" key={index}>
                                <div className="product-column">
                                <img className ="cart-image" src={cartItem.images[0]} alt="" />    
                                </div>
                                <div className="product-column">
                                    <div>Product</div>
                                    <div>{cartItem.itemName}</div>
                                </div>
                                <div className="product-column">
                                    <div>Item Price</div>
                                    <div>${cartItem.itemPrice}</div>
                                </div>
                                <div className="product-column">
                                    <div>Personalization</div>
                                    <div>{cartItem.itemPersonalization}</div>
                                </div>
                                <button id= {index} onClick = {props.removeItemFromCart} className="general-button">Remove From Cart</button>
                            </div>
                        )
                    })}
                    <div className="cart-details">
                        <div className="upsell-container">
                            <h2>You may also be interested in</h2>
                            <RandomItem />
                        </div>
                        <div className="cart-total-container">
                            <h2>Cart totals</h2>
                            <div className="total-item">
                                <div>Subtotal: </div>
                                <CartSubtotal />
                            </div>
                            <div className="total-item">
                                <div>Shipping: </div>
                                <div>Free shipping</div>
                            </div>
                            <div className="total-item">
                                <div>Total: </div>
                                <CartSubtotal />
                            </div>
                            <button className="general-button">Proceed to checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    const EmptyCart = () => {
        return (
            <div>
                <h1>Your Shopping Cart Is Empty!</h1>
                <Link to = {`/Shop`}><button className="general-button">Take me to the shop page</button></Link>
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