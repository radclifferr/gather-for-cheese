import React from "react";
import { useLocation} from "react-router-dom"
import "../styles/Item.css"

const Item = (props) => {
    const location = useLocation()
    const index = location.state.itemNumber
    let product = props.getItems[index]


    const handleAddToCart = (e) => {
        e.preventDefault()
        let productCopy = {...product}
        let personalValue = e.nativeEvent.path[1][0].value
        props.addItemToCart(productCopy, personalValue)
    }

    return (
        <div className="item-page-container">
            <img src={product.itemMainImage} alt=""  className="product-image"/>
            <div>
                <div>{product.itemName}</div>
                <div>{product.itemDescription}</div>
                <div>${product.itemPrice}</div>
                <form>
                    <label htmlFor ="personalization">Enter your product personalization: </label>
                    <input type="text" id="personalization" maxLength={20} required />
                    <button onClick = {handleAddToCart}>Add To Cart</button>
                </form>
                
            </div>
            

        </div>

    )
}

export default Item