import { Navigate, useNavigate } from "react-router-dom";
import './Cart.css'
import CartItems from "./CartItems";
import { useState } from "react";

function Cart() {
    const navigate = useNavigate();

    const [itemData, setItemData] = useState([
        {   
            id: 1,
            title: '닭가슴살',
            price: 19900,
            imgPath: '/images/bodyImg.jpg',
            qty: 1,
            isChecked: false
        },
        {   
            id: 2,
            title: '떡볶이',
            price: 10900,
            imgPath: '/images/bodyImg.jpg',
            qty: 1,
            isChecked: false
        }
    ]);

    return (
        <div className="cart-page-container">
            <div className='cart-header'>
                <img src='/images/BalancEat_logo.png' className='logo-image' alt='로고 이미지' onClick={() => { navigate('/') }}></img>
                <div className='cart-header-right'>
                    <i className="fa-solid fa-cart-shopping" onClick={() => { navigate("/shopping") }}></i>
                    <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>
                </div>
                <div className='cart-seperator-line'></div>
            </div>
            <div className="cart-content-container">
                <div className="cart-content">
                    

                    <CartItems itemData={itemData} setItemData={setItemData} />

                    
                    <div className="cartBtns">
                        <button className="continueBtn" onClick={()=>{navigate('/shopping')}}>쇼핑계속하기</button>
                        <button className="orderBtn" onClick={()=>{navigate('/main')}}>주문하기</button>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Cart;