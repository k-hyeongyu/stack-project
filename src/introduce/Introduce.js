import './Introduce.css';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import MyPage from '../mypage/MyPage';

function Introduce() {

    let navigate = useNavigate();

    return (
        <div className="intro-vid-container">
            <img className="intro-logo" src='/BalancEat_logo_white.png'></img>
            <div className='intro-header'>
                <i className="fa-solid fa-cart-shopping"></i>
                {/* <i className="fa-regular fa-bag-shopping" onClick={() => { navigate("/shopping") }}></i> */}
                <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>

            </div>
            <video className="intro-vid" src='/bgVideo01.mp4' autoPlay muted loop></video>
            {/* <h1>"BalancEat"</h1> */}
            <p className='gowun-batang-bold intro-text'>
                체형 목표에 맞춘 균형 잡힌 식단으로
                <br></br>
                당신의 건강한 변화를 이끌어갑니다.
            </p>
            <Link to='/main'><button className='intro-button gowun-batang-bold'>식단 소개</button></Link>

        </div>
    )
}

export default Introduce;