import React from 'react';
import './BulkUp.css';

function BulkUp() {
    return (
        <div className="container">
            {/* 로고와 제목을 위한 헤더 */}
            <header className="bulkup-header"> {/* 기존 header 클래스를 이름 변경 */}
                <div className="logo-section">
                    <div className="logo">
                        <img src="../BalancEat_logo.png" alt="로고 이미지" />
                    </div>
                    <h1>벌크업</h1>
                </div>
            </header>

            {/* 아이콘들을 위한 별도의 컨테이너. 페이지의 특정 위치에 배치될 것임. */}
            <div className="bulkup-top-right-icons"> {/* 새로 추가된 컨테이너 */}
                <div className="shop">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="name">
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>

            <main className="main-content">
                <aside className="sidebar">
                    <div className="sidebar-item">다이어트</div>
                    <div className="sidebar-item">체형유지</div>
                </aside>
                <section className="content-grid">
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </section>
            </main>
        </div>
    );
}

export default BulkUp;