import { Routes, useNavigate, Route } from 'react-router';
import './Shopping.css';
import { useState } from 'react';
import { itemsData1, itemsData2, itemsData3 } from './itemsData';
import ShoppingHome from './ShoppingHome';
import DetailExplain from './details/DetailExplain';
import Footer from '../health-pages/Footer';


function Shopping() {

    let [items1, setItems1] = useState(itemsData1);
    let [items2, setItems2] = useState(itemsData2);
    let [items3, setItems3] = useState(itemsData3);

    let navigate = useNavigate();

    return (
        <div>
            <div className='shopping-header'>
                <img src='./images/BalancEat_logo.png' className='logo-image' alt='로고 이미지' onClick={() => { navigate('/main') }}></img>
                <div className='shopping-header-right'>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/shopping") }}>
                        storefront
                    </span>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/cart") }}>
                        local_mall
                    </span>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/mypage/dashboard") }}>
                        person
                    </span>
                </div>
                <div className='shopping-seperator-line'></div>
            </div>

            <Routes>
                <Route path='/' element={<ShoppingHome items1={items1} items2={items2} items3={items3} />}></Route>
                <Route path="/details/:id" element={<DetailExplain items1={items1} items2={items2} items3={items3} />}></Route>
            </Routes>

            <Footer/>
        </div>
    )
}

export default Shopping;