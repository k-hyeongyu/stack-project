import { Navigate, useNavigate } from "react-router-dom";
import './Cart.css'
import CartItems from "./CartItems";
import { useState } from "react";
import Footer from "../health-pages/Footer";

function Cart() {
    const navigate = useNavigate();

    const [itemData, setItemData] = useState([
        {
            id: 1,
            title: '오븐구이 닭가슴살 혼합 10팩',
            price: 19900,
            imgPath: '/images/shopping-images/it1_01.png',
            qty: 1,
            isChecked: false
        },
        {
            id: 2,
            title: '저당 쌀떡볶이 3팩',
            price: 10500,
            imgPath: '/images/shopping-images/it3_01.png',
            qty: 1,
            isChecked: false
        }
    ]);

    return (
        <div className="cart-page-container">
            <div className='cart-header'>
                <img src={process.env.PUBLIC_URL+"/images/BalancEat_logo.png"} className='logo-image' alt='로고 이미지' onClick={() => { navigate('/') }}></img>
                <div className='cart-header-right'>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/shopping") }}>
                        storefront
                    </span>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/cart") }}>
                        local_mall
                    </span>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/mypage/dashboard") }}>
                        person
                    </span>
                </div>
                <div className='cart-seperator-line'></div>
            </div>
            <div className="cart-content-container">
                <div className="cart-content">


                    <CartItems itemData={itemData} setItemData={setItemData} />


                    <div className="cartBtns">
                        <button className="continueBtn" onClick={() => { navigate('/shopping') }}>쇼핑계속하기</button>
                        <button className="orderBtn" onClick={() => {
                            alert('주문이 완료되었습니다.')
                            navigate('/shopping')
                        }}>주문하기</button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Cart;