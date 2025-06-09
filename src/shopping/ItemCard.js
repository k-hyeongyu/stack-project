import { useNavigate } from "react-router";
import './Shopping.css';
import { itemsData1, itemsData2, itemsData3 } from './itemsData';

function ItemCard({ item }) {

    let navigate = useNavigate();

    return (
        <div>
            <div className="shopping-items" onClick={()=>{navigate('/shopping/details/' + item.id)}}>
                <img src={process.env.PUBLIC_URL + item.imgUrl} className="item-img"/>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">{item.price}</p>
            </div>
        </div>
    )
}

export default ItemCard;