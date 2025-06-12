import Header from './Header'; // Header 컴포넌트 import
import Sidebar from '../components/Sidebar'; // Sidebar 컴포넌트 import
import VideoGrid from '../components/VideoGrid'; // VideoGrid 컴포넌트 import
import './Layout.css'; // 새로 만들거나 기존 CSS에 추가
// Modal은 보통 버튼 클릭 등으로 동적으로 나타나므로, 여기서는 포함하지 않을 수 있습니다.
// 필요하다면 Modal도 여기에 import하여 상태에 따라 렌더링할 수 있습니다.

// 레이아웃 스타일을 위한 CSS 파일 (선택 사항)

function Layout() {
    return (
        <div className="layout-container"> {/* 모든 것을 감싸는 최상위 래퍼 div */}
            <Header /> {/* 헤더 컴포넌트 배치 */}
            <div className="sideBar-videoGrid"> {/* 사이드바와 비디오 그리드를 감싸는 영역 */}
                <Sidebar /> {/* 사이드바 컴포넌트 배치 */}
                <VideoGrid /> {/* 비디오 그리드 컴포넌트 배치 */}
                {/* <Modal /> 은 필요에 따라 조건부 렌더링 */}
            </div>
            {/* 다른 푸터나 추가적인 요소가 있다면 여기에 배치 */}
        </div>
    );
}

export default Layout;