import { useNavigate } from 'react-router';
import './Shopping.css';
import { useState } from 'react';
import { itemsData1, itemsData2, itemsData3 } from './itemsData';
import ShoppingHome from './ShoppingHome';


function Shopping() {

    let [items1, setItems1] = useState(itemsData1);
    let [items2, setItems2] = useState(itemsData2);
    let [items3, setItems3] = useState(itemsData3);

    let navigate = useNavigate();

    return (
        <div>
            <div className='shopping-header'>
                <img src='/BalancEat_logo.png' id='logo-img' onClick={()=>{navigate('/')}}></img>
                <div className='shopping-header-right'>
                    <i className="fa-solid fa-cart-shopping" onClick={() => { navigate("/shopping") }}></i>
                    <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>
                </div>
                <div className='shopping-seperator-line'></div>
            </div>

            <div className='shopping-container'>
                <ShoppingHome items1={items1} items2={items2} items3={items3}/>
            </div>
        </div>
    )
}

export default Shopping;