import { useState } from "react";
import './CartItems.css';

function CartItems({ itemData, setItemData }) {


    const handleQtyChange = (itemId, chg) => {
        const updatedItemData = itemData.map(item => {
            if (item.id === itemId) {
                const newQty = item.qty + chg;
                if (newQty == 0) return { ...item, qty: 1 };
                if (newQty > 99) return { ...item, qty: 99 };
                return { ...item, qty: newQty };
            }
            return item;
        });
        setItemData(updatedItemData);
    };

    const handleItemCheck = (itemId) => {
                                const updatedItemData = itemData.map(item =>
                                    item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
                                );
                                setItemData(updatedItemData);
                            }

    const isAllItemsChecked = itemData.length > 0 && itemData.every(item => item.isChecked);

    return (
        <>
            <h2>장바구니</h2>
            <div className="cart-option">
                <div className="chooseAllChkBox">
                    <input type="checkbox" checked={isAllItemsChecked} onChange={(event) => {

                        const temp = itemData.map((item) => ({
                            ...item,
                            isChecked: event.target.checked
                        }))
                        setItemData(temp);

                    }} />
                    <span>전체선택</span>
                </div>
                <button onClick={()=>{
                    const temp = itemData.filter((item)=> item.isChecked == false);
                    setItemData(temp);
                }}>선택삭제</button>
            </div>

            {itemData.map((item, index) => {
                return (


                    <div className="cart-items">
                        <div className="imgAndInfo">
                            <input type="checkbox" checked={item.isChecked} onChange={()=>{handleItemCheck(item.id)}} />
                            <img src={item.imgPath} alt="상품이미지"></img>
                            <div className="itemInfo">
                                <h4>{item.title}</h4>
                                <span>{item.price.toLocaleString()}원</span>
                            </div>
                        </div>
                        <div className="qty-group">
                            <div className="qty-btns">
                                <button onClick={() => handleQtyChange(item.id, -1)}>-</button>
                                <input type="text" value={item.qty} className="input-qty"></input>
                                <button onClick={() => handleQtyChange(item.id, 1)}>+</button>
                            </div>
                            <h4>{(item.price * item.qty).toLocaleString()}원</h4>
                            <button className="del-btn" onClick={() => {
                                let temp = [...itemData];
                                temp.splice(index, 1);
                                setItemData(temp);
                            }}>X</button>
                        </div>
                    </div>

                )

            })}
            <div className="totalPriceBox">
                <div className="itemPrice">
                    <span>상품금액</span>
                    <h2>{
                        itemData.reduce((acc, item) => acc + (item.price * item.qty), 0).toLocaleString()
                    }원</h2>
                    <img src="/images/cart-icons/plus_icon.png"></img>
                </div>
                <div className="discountPrice">
                    <span>할인금액</span>
                    <h2>0원</h2>
                    <img src="/images/cart-icons/minus_icon.png"></img>
                </div>
                <div className="shippingPrice">
                    <span>배송비</span>
                    <h2>무료</h2>
                    <img src="/images/cart-icons/eqaul_icon.png"></img>
                </div>
                <div className="cart-totalPrice">
                    <span>총 결제금액</span>
                    <h2>{
                        itemData.reduce((acc, item) => acc + (item.price * item.qty), 0).toLocaleString()
                    }원</h2>
                </div>
            </div>
        </>
    );
}

export default CartItems;