import React from "react";
import "./MainPage.css";

function MainPage() {
    const handleClick = (type) => {
        alert(`${type} 버튼이 클릭되었습니다.`);
    };

    return (
        <div className="container">
            {/* 상단 네비 */}
            <header className="top-nav">
                <button className="circle" onClick={() => handleClick("로고")}>로고</button>
                <div className="profile">
                    <div className="name">이름</div>
                    <div className="mypage">마이페이지</div>
                </div>
            </header>

            {/* 카드 버튼 영역 */}
            <div className="card-container">
                <button className="card" onClick={() => handleClick("다이어트")}>
                    <h2>다이어트</h2>
                    <p>체지방 감량을 위해 식이요법과 운동을 원해요</p>
                </button>
                <button className="card" onClick={() => handleClick("체형유지")}>
                    <h2>체형유지</h2>
                    <p>과함도 부족함도 없는 신체 밸런스를 원해요</p>
                </button>
                <button className="card" onClick={() => handleClick("벌크업")}>
                    <h2>벌크업</h2>
                    <p>근육 성장을 위한 식단과 운동을 원해요</p>
                </button>
            </div>
        </div>
    );
}

export default MainPage;