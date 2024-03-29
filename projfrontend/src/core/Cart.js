import React, { useEffect, useState } from 'react'
import "../styles.css"
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/CardHelper';
import PaymentPaypal from './PaymentPaypal';

export default function Cart() {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])


    const loadAllProducts = (products) => {
        return (
            <div>
                <h2>This section is to load all the products</h2>

                {products.map((product, index) => {
                    return (
                        <Card
                            key={index}
                            product={product}
                            addToCart={false}
                            removeFromCart={true}
                            setReload={setReload}
                            reload={reload}
                        />
                    )
                })}
            </div>
        )
    }

    // eslint-disable-next-line no-unused-vars
    const loadCheckout = () => {
        return (
            <div>
                <h2 className='text-white'>This section is for checkout </h2>
            </div>
        )
    }

    return (
        <Base title='Cart Page' description='Ready to checkout'>
            <div className="row text-white">
                <div className="col-6"> {products.length > 0 ? loadAllProducts(products) : (<h3>No products in cart</h3>)} </div>
                <div className="col-6"> <PaymentPaypal products = {products} setReload={setReload} > </PaymentPaypal> </div>
            </div>
        </Base>
    )
}       
