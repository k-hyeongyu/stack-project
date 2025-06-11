import { Routes, useNavigate, Route } from 'react-router';
import './Shopping.css';
import { useState } from 'react';
import { itemsData1, itemsData2, itemsData3 } from './itemsData';
import ShoppingHome from './ShoppingHome';
import DetailExplain from './details/DetailExplain';


function Shopping() {

    let [items1, setItems1] = useState(itemsData1);
    let [items2, setItems2] = useState(itemsData2);
    let [items3, setItems3] = useState(itemsData3);

    let navigate = useNavigate();

    return (
        <div>
            <div className='shopping-header'>
                <img src='/images/BalancEat_logo.png' className='logo-image' alt='로고 이미지' onClick={()=>{navigate('/')}}></img>
                <div className='shopping-header-right'>
                    <i className="fa-solid fa-cart-shopping" onClick={() => { navigate("/shopping") }}></i>
                    <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>
                </div>
                <div className='shopping-seperator-line'></div>
            </div>

            <Routes>
                <Route path='/' element={<ShoppingHome items1={items1} items2={items2} items3={items3}/>}></Route>
                <Route path="/details/:id" element={<DetailExplain items1={items1} items2={items2} items3={items3}/>}></Route>
            </Routes>
        </div>
    )
}

export default Shopping;