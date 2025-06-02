import React from 'react'; // React 컴포넌트를 사용하기 위해 필요
import './BulkUp.css'; // CSS 파일 임포트

function BulkUp() { // 컴포넌트 이름은 대문자로 시작해야 합니다.
    return (
        <div className="container">
            <header className="header">
                <div className="logo-section">
                    <div className="logo-box">로고</div>
                    <h1>벌크업</h1>
                </div>
                <div className="user-info">
                    <p>이름</p>
                    <p>마이페이지</p>
                </div>
            </header>

            <main className="main-content">
                <aside className="sidebar">
                    <div className="sidebar-item">다이어트</div>
                    <div className="sidebar-item">체형유지</div>

                </aside>
                <section className="content-grid">
                    <div className="grid-item content-header">콘텐츠</div>
                    <div className="grid-item content-description">
                        벌크업 컨텐츠는 식단과 운동이<br/> {/* JSX에서는 <br> 대신 <br/> 사용 */}
                        2 : 8의 비율로 된 컨텐츠가 생성
                    </div>
                    {/* 나머지 빈 박스들 */}
                    {[...Array(7)].map((_, index) => ( // 7개의 빈 박스 동적 생성
                        <div key={index} className="grid-item empty-box"></div>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default BulkUp;