import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/CardHelper';
import ImageHelper from './helper/ImageHelper';

export default function Card({ 
    product, 
    addToCart = true, 
    removeFromCart = false, 
    setReload = f=>f, 
    //function(f) = {return f}
    reload = undefined 
}) {

    const cardTitle = product ? product.name : "A photo from Internet"
    const cardDescription = product ? product.description : " Default"
    const cardPrice = product ? product.price : "5$ Default"

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)

    const addtoCart = () => {
        addItemToCart(product, () => setRedirect(true))
    }

    const getARedirect = (redirect) => {
        if (redirect) {
            return <Navigate to="/cart" />
        }
    }

    const showAddToCart = (addToCart) => {
        return (
            addToCart && (
                <button
                    onClick={addtoCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        )

    }
    const showRemoveFromCart = () => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product._id)
                        setReload(!reload)
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                    Remove from cart
                </button>
            )
        )

    }


    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cardTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product} />
                <p className="lead bg-success font-weight-normal text-wrap">
                    {cardDescription}
                </p>
                <p className="btn btn-success rounded d-grid btn-sm px-4">{cardPrice}</p>
                <div className="row ">
                    <div className="col-12 d-grid">
                        {showAddToCart(addToCart)}
                    </div>
                    <div className="col-12 d-grid">
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    );
}