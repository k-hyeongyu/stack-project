import { useNavigate } from "react-router";

function ItemCard(props){

    let navigate = useNavigate();

    return(
        <div>
            <div className="shopping-items">
                <p>닭가슴살</p>
                <div>
                    <img src={process.env.PUBLIC_URL + props.items1.title}/>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;