import React from "react";
import "../styles/ShippingReturns.css"

const ShippingReturns = () => {
    return (
        <div className="returns-container">
            <h1>Shipping & Return Policy</h1>
            <h2>Processing time</h2>
            <p>The time I need to prepare a custom order is 5-7 days from order.</p>
            <p>For non custom or personalized items, items will be prepared for shipment 1-2 days from order.</p>
            <h2>Customs and import taxes</h2>
            <p>Buyers are responsible for any customs and import taxes that may apply. I’m not responsible for delays due to customs.</p>
            <p>Cancelations: I gladly accept cancellations up to the date of shipment for non custom or non personalized items.</p>
            <p>I don’t accept cancellations for custom or personalized items.</p>
            <h2>Return Policy</h2>
            <h3>The following items can’t be returned or exchanged</h3>
            <p>Because of the nature of these items, unless they arrive damaged or defective, I can’t accept returns for custom or personalized orders</p>
            <h3>Conditions of return</h3>
            <p>Buyers are responsible for return shipping costs. If the item is not returned in its original condition, the buyer is responsible for any loss in value.</p>
            <p>Contact me within: 14 days of delivery</p>
            <p>Ship items back within: 30 days of delivery</p>
        </div>

    )
}
export default ShippingReturns;