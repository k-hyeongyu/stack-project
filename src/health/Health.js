import React from 'react';
import './Health.css';

function Health({ title, sidebarItems, gridItems }) {
    return (
        <div className="container">
            {/* 로고와 제목을 위한 헤더 */}
            <header className="bulkup-header"> {/* 기존 header 클래스를 이름 변경 */}
                <div className="logo-section">
                    <div className="logo">
                        <img src="../BalancEat_logo.png" alt="로고 이미지" />
                    </div>
                    <h1>{title}</h1>
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
                    {/* sidebarItems prop을 사용하여 사이드바 아이템 동적 생성 */}
                    {sidebarItems.map((item, index) => (
                        <div key={index} className="sidebar-item">{item}</div>
                    ))}
                </aside>
                <section className="content-grid">
                    {/* gridItems prop을 사용하여 그리드 아이템 동적 생성 */}
                    {gridItems.map((item, index) => (
                        <div key={index} className="grid-item">
                            {/* 예시: 그리드 아이템 내용이 이미지와 텍스트인 경우 */}
                            {item.image && <img src={item.image} alt={item.text} />}
                            {item.text && <p>{item.text}</p>}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Health;