import { useNavigate } from "react-router";
import './Shopping.css';

function ItemCard({ item }) {

    let navigate = useNavigate();

    return (
        <div className="shopping-itemCard">
            <div className="shopping-items" onClick={()=> {navigate('/items/{item.id}')}}>
                <img src={process.env.PUBLIC_URL + item.imgUrl} className="item-img"/>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default ItemCard;