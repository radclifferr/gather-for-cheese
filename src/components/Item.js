import React, {useState} from "react";
import { useLocation} from "react-router-dom"
import "../styles/Item.css"
import ProductCarousel from "./ProductCarousel";
import Modal from "./Modal"

const Item = (props) => {
    const [modalStatus, toggleModal] = useState(false);

    const showModal = () => {
        toggleModal(true);
    };

    const hideModal = () => {
        toggleModal(false);
    };
    const location = useLocation()
    const index = location.state.index
    let product = props.getItems[index]


    const handleAddToCart = (e) => {
        e.preventDefault()
        let productCopy = {...product}
        let personalValue = e.nativeEvent.path[1][0].value
        props.addItemToCart(productCopy, personalValue)
        showModal()
    }

    return (
        <div>
            <h1 className="product-title">{product.itemName}</h1>
            <div className="item-page-container">
                <ProductCarousel images={product.images}/>
                <div className="item-data-container">
                    <div className="item-description">{product.itemDescription}</div>
                    <Modal modalStatus={modalStatus} hideModal={hideModal} />
                    <form>
                        <label htmlFor ="personalization">Enter your product personalization: </label>
                        <input type="text" id="personalization" maxLength={20} required />
                        <div className="item-price">${product.itemPrice}</div>
                        <button type="submit" onClick = {handleAddToCart} className="general-button">Add To Cart</button>
                    </form>
                </div>
            </div>

            

        </div>

    )
}

export default Item