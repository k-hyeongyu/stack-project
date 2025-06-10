import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./MainPage.css";

function MainPage() {

    let navigate = useNavigate();
    return (
        <div className="main-wrapper">
            <video autoPlay loop muted className="background-video">
                <source src="/bgVideo01.mp4" type="video/mp4" />                
            </video>

            <div className="health-container">
                {/* 상단 네비 */}
                <header className="top-nav">
                    <div className="profile">
                        {/* 쇼핑 아이콘을 클릭하면 /shop 으로 이동 */}
                        <div className="shop">
                            <i className="fa-solid fa-cart-shopping" onClick={() => { navigate("/shopping") }}></i>
                        </div>
                        {/* 이름 아이콘 */}
                        <div className="name">
                            <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>
                        </div>
                    </div>
                </header>

                {/* 카드 버튼 영역 */}
                <div className="card-container">
                    {/* 벌크업 카드를 Link 컴포넌트로 감쌉니다 */}
                    <Link to="/diet" className="health-card">
                        <div className="card-text">
                            <h2>다이어트</h2>
                            <p>체지방 감량을 위한 <br></br>식이요법과 운동을 원해요</p>
                        </div>
                    </Link>

                    <Link to="/keep" className="health-card">
                        <div className="card-text">
                            <h2>체형유지</h2>
                            <p>과함도 부족함도 없는 <br></br>신체 밸런스를 원해요</p>
                        </div>
                    </Link>

                    <Link to="/bulk" className="health-card"> {/* 'to' prop에 이동할 경로 지정 */}
                        <div className="card-text">
                            <h2>벌크업</h2>
                            <p>근육 성장을 위한 <br></br>식단과 운동을 원해요</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainPage;