    import React from 'react'
    import '../css/Shopping.css'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {faBell, faTrash} from '@fortawesome/free-solid-svg-icons'
    import { useNavigate } from 'react-router-dom'

    const Shopping = () => {
        const route = useNavigate();
    return (
        <>
        <div className='Head-section'>
            <h1>Shopping Cart</h1>
            <div className='cartShop'>
            <div className='products'>
                <div className='prod'>
                    <img src='/images/card1.jpg'/>
                    <div className='product-info'>
                        <h2 className='product-name'>Name : New Shops</h2>
                        <h4 className='product-price'>Price : 75$</h4>
                        <h4 className='product-offer'>Offer : 50%</h4>
                        <p className='product-remove'>
                        <FontAwesomeIcon className='L' icon={faTrash} />
                        <button className='button remove'>Remove</button>
                        </p>
                    </div>
                </div>
                <div className='prod'>
                    <img src='/images/card2.jpg'/>
                    <div className='product-info'>
                        <h2 className='product-name'>Nmae : New Shops</h2>
                        <h4 className='product-price'>Price : 50$</h4>
                        <h4 className='product-offer'>Offer : 50%</h4>
                        <p className='product-remove'>
                        <FontAwesomeIcon className='L' icon={faTrash} />
                        <button className='button remove'>Remove</button>
                        </p>
                    </div>
                </div>
                <div className='prod'>
                    <img src='/images/card3.jpg'/>
                    <div className='product-info'>
                        <h2 className='product-name'>Nmae : New Shops</h2>
                        <h4 className='product-price'>Price : 50$</h4>
                        <h4 className='product-offer'>Offer : 50%</h4>
                        <p className='product-remove'>
                        <FontAwesomeIcon className='L' icon={faTrash} />
                        <button className='button remove'>Remove</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className='cart-total'>
                <p>
                    <span>Total Price</span>
                    <span>3,000$</span>
                </p>
                <p>
                    <span>Number Of Item</span>
                    <span>2</span>
                </p>
                <p>
                    <span>You Have</span>
                    <span>1,000</span>
                </p>
                <a href='#' onClick={()=>{route('/Checkout')}}>proceed to checkout</a>
            </div>
            </div>
        </div>
        </>
    )
    }

    export default Shopping
