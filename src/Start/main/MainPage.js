import React from "react";
import "./MainPage.css";

function MainPage() {
    const handleClick = (type) => {
        alert(`${type} 버튼이 클릭되었습니다.`);
    };

    return (
        <div className="main-wrapper">
            <video autoPlay loop muted className="background-video">
                <source src="bgVideo01.mp4" type="video/mp4" />
                브라우저가 video 태그를 지원하지 않습니다.
            </video>

            <div className="health-container">
                {/* 상단 네비 */}
                <header className="top-nav">
                    <div className="profile">
                        {/* 쇼핑 아이콘을 클릭하면 /shop 으로 이동 */}
                        <div className="shop">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>

                        {/* 이름 아이콘 */}
                        <div className="name">
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                </header>

                {/* 카드 버튼 영역 */}
                <div className="card-container">
                    <button className="card" onClick={() => handleClick("다이어트")}>
                        <h2>다이어트</h2>
                        <p>체지방 감량을 위해 <br></br>식이요법과 운동을 원해요</p>
                    </button>
                    <button className="card" onClick={() => handleClick("체형유지")}>
                        <h2>체형유지</h2>
                        <p>과함도 부족함도 없는 <br></br>신체 밸런스를 원해요</p>
                    </button>
                    <button className="card" onClick={() => handleClick("벌크업")}>
                        <h2>벌크업</h2>
                        <p>근육 성장을 위한 <br></br>식단과 운동을 원해요</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;