import { Navigate, useNavigate } from "react-router-dom";
import './Cart.css'

function Cart() {
    const navigate = useNavigate();
    return (
        <>
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
                    <h2>장바구니</h2>
                    <div className="cart-option">
                        <div className="chooseAllChkBox">
                            <input type="checkbox" />
                            <span>전체선택</span>
                        </div>
                        <button>선택삭제</button>
                    </div>
                    <div className="cart-items">
                        <div className="imgAndInfo">
                            <input type="checkbox" />
                            <img src="/logo192.png" alt="상품이미지"></img>
                            <div>
                                <h4>닭가슴살</h4>
                                <span>19,900원</span>
                            </div>
                        </div>
                        <div className="qty-group">
                            <div className="qty-btns">
                                <button>-</button>
                                <input type="text" className="input-qty"></input>
                                <button>+</button>
                            </div>
                            <h4>19,000원</h4>
                            <button className="del-btn">X</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Cart;