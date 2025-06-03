import React from 'react'; // React 컴포넌트를 사용하기 위해 필요
import './BulkUp.css'; // CSS 파일 임포트

function BulkUp() { // 컴포넌트 이름은 대문자로 시작해야 합니다.
    return (
        <div className="container">
            <header className="header">
                <div className="logo-section">
                    <div className="logo">
                        <img src="../BalancEat_logo.png" alt="로고 이미지" />
                    </div>

                    <h1>벌크업</h1>
                </div>
                <div className="user-info">
                    <div className="shop">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="name">
                            <i className="fa-solid fa-user"></i>
                    </div>
                </div>
            </header>

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
                </section>
            </main>
        </div>
    );
}

export default BulkUp;