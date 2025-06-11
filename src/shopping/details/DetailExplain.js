import { useNavigate, useParams } from 'react-router';
import './DetailExplain.css';
import { useState } from 'react';

function DetailExplain({ items1, items2, items3 }) {

    let navigate = useNavigate();
    let [itemCount, setItemCount] = useState(1)

    let { id } = useParams();

    let allItems = [...items1, ...items2, ...items3];
    let foundItem = allItems.find((item) => {
        return item.id === id
    })

    if (foundItem === undefined) {
        return (
            <div>
                <div className='shopping-header'>
                    <img src='/BalancEat_logo.png' alt='로고 이미지' className='logo-image' onClick={() => { navigate('/') }}></img>
                    <div className='shopping-header-right'>
                        <i className="fa-solid fa-cart-shopping" onClick={() => { navigate("/shopping") }}></i>
                        <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>
                    </div>
                    <div className='shopping-seperator-line'></div>
                </div>
                <h2>해당 상품을 찾을 수 없습니다.</h2>
            </div>
        )
    }

    return (
        <div className='detail-container'>
            <div>
                <img src={process.env.PUBLIC_URL + foundItem.imgUrl} alt='상품 이미지' className='detail-img' />
            </div>

            <div className='detail-info'>
                <h2>{foundItem.title}</h2>
                <p className='detail-explain'>{foundItem.detailExplain}</p>
                <div className='detail-seperator-line'></div>

                <div className='detail-post'>
                    <p className='detail-priceInfo'>판매가격 : </p>
                    <p className='detail-price'>{foundItem.price}<span className='detail-priceWon'>원</span></p>
                </div>

                <div className='detail-post'>
                    <span className='detail-priceInfo'>배송정보 : </span>
                    <div className='detail-postInfo'>
                        <p id='freeship'>배송비 무료</p>
                        <p>밸런잇에서 직접 배송</p>
                        <p>(CJ 대한통운)</p>
                    </div>
                </div>
                <div className='detail-post'>
                    <p className='detail-priceInfo'>오늘출발 : </p>
                    <p id='todayship'>평일 오후 4시까지 결제시 당일 출고됩니다.</p>
                </div>

                <div className='detail-post'>
                    <p className='detail-priceInfo'>수량선택 : </p>
                    <div className="detail-itemCount">
                        <button className='detail-countButton' onClick={() => {
                            if (itemCount > 1) {
                                setItemCount(itemCount - 1)
                            }
                        }}>-</button>
                        <input type="text" className="detail-input" value={itemCount}></input>
                        <button className='detail-countButton' onClick={() => {
                            setItemCount(itemCount + 1)
                        }}>+</button>
                    </div>
                </div>
                <div className='detail-seperator-line'></div>

                <div className='detail-totalPrice'>
                    <p id='detail-totalPriceText'>총 상품금액 </p>
                    <p id='detail-itemTotalPrice'>{(Number(foundItem.price.replace(/,/g, '')) * itemCount).toLocaleString('ko-KR')}<span className='detail-priceWon'>원</span></p>

                </div>

                <button className='detail-putShoppingCart'>카트에 담기</button>

            </div>
        </div>
    )
}

export default DetailExplain;