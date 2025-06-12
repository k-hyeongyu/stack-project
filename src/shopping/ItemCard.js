import { useNavigate } from "react-router";
import './Shopping.css';

function ItemCard({ item }) {

    let navigate = useNavigate();

    return (
        <div>
            <div className="shopping-items" onClick={()=>{navigate('/shopping/details/' + item.id)}}>
                <img src={process.env.PUBLIC_URL + item.imgUrl} alt="상품 이미지" className="item-img"/>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">{item.price}원</p>
            </div>
        </div>
    )
}

export default ItemCard;