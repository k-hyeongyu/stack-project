import { useNavigate, useParams } from 'react-router';
import './DetailExplain.css';

function DetailExplain({ items1, items2, items3 }) {

    let navigate = useNavigate();

    let { id } = useParams();

    let allItems = [...items1, ...items2, ...items3];
    let foundItem = allItems.find((item) => {
        return item.id === id
    })

    if (foundItem == undefined) {
        return (
            <div>
                <div className='shopping-header'>
                    <img src='/BalancEat_logo.png' className='logo-image' onClick={() => { navigate('/') }}></img>
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
                <img src={process.env.PUBLIC_URL + foundItem.imgUrl} className='detail-img'/>
            </div>
            <div className='detail-info'>
                <h2>{foundItem.title}</h2>
                <p className='detail-explain'>{foundItem.detailExplain}</p>
                <div className='detail-seperator-line'></div>
                <span className='detail-priceInfo'>판매가격 : </span>
                <span className='detail-price'>{foundItem.price}</span>
            </div>
        </div>
    )
}

export default DetailExplain;