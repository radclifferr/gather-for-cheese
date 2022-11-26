import React from "react";
import { useLocation, Link } from "react-router-dom"

const Item = (props) => {
    console.log(props)
    const location = useLocation()
    console.log(location)
    return (
        "Item/ Product Detailed Page"
    )
}

export default Item