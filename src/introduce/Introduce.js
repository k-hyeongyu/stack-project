import './Introduce.css';
import { Link, useNavigate } from 'react-router';

function Introduce() {

    let navigate = useNavigate();

    return (
        <div className="intro-vid-container">
            <img className="intro-logo" src='./images/BalancEat_logo_white.png' alt='인트로 로고 이미지'></img>
            <div className='intro-header'>
                <span class="material-symbols-outlined" onClick={() => { navigate("/shopping") }}>
                    storefront
                </span>
                <span class="material-symbols-outlined" onClick={() => { navigate("/cart") }}>
                    local_mall
                </span>
                <span class="material-symbols-outlined" onClick={() => { navigate("/login") }}>
                    person
                </span>
            </div>
            <video className="intro-vid" src='./videos/bgVideo01.mp4' autoPlay muted loop></video>
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