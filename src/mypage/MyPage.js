import React, { useState } from "react";
import './MyPage.css'
import Charts from "./dashboard/Charts";
import UserBodyInfo from "./dashboard/UserBodyInfo";
import EditProfile from "./editprofile/EditProfile";
import DietQuotes from "./goals/DietQuotes";
import GoalChart from "./goals/GoalChart";
import MessageBox from "./messagebox/MessageBox";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

function MyPage() {

    const navigate = useNavigate();

    // 체중 데이터 하드코딩
    const [weightData, setWeightData] = useState(['77', '76.8', '76.5', '75.7', '76.1', '75.2',
        '75.3', '74.1', '73.7', '73.5', '73.1', '72.7'
    ].reverse());
    const skeletalMuscleMassData = [30, 30.2, 30.5, 30.8, 31, 31.2, 31.5, 31.7, 32, 32.1, 32.3, 32.2].reverse();

    const [userInfo, setUserInfo] = useState({
        name: '가나다',
        email: 'ganada@naver.com',
        password: '●●●●●●●●●●',
        passwordcheck: '●●●●●●●●●●',
        tel: '01012345678',
        age: '50',
        height: '170',
        weight: '70'
    });

    const [selectedMypageTab, setSelectedMypageTab] = useState(1);
    return (
        <div id="myPageContainer" overflow="hidden">
            <div className='mypage-header'>
                <img src={process.env.PUBLIC_URL+"/images/BalancEat_logo.png"} className='logo-image' alt='로고 이미지' onClick={() => { navigate('/') }}></img>
                <div className='mypage-header-right'>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/shopping") }}>
                        storefront
                    </span>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/cart") }}>
                        local_mall
                    </span>
                    <span class="material-symbols-outlined" onClick={() => { navigate("/mypage") }}>
                        person
                    </span>
                </div>
            </div>

            <div id="myPageMain">
                <div id="tabs">
                    <ul className="tablist">
                        <li className="tab tab1" aria-current={selectedMypageTab === 1 ? 'page' : false} onClick={() => {
                            navigate('/mypage/dashboard');
                            setSelectedMypageTab(1);
                        }}>대시보드</li>
                        <li className="tab" aria-current={selectedMypageTab === 2 ? 'page' : false} onClick={() => {
                            navigate('/mypage/goals')
                            setSelectedMypageTab(2);
                        }}>목표관리</li>
                        <li className="tab" aria-current={selectedMypageTab === 3 ? 'page' : false} onClick={() => {
                            navigate('/mypage/messagebox')
                            setSelectedMypageTab(3);
                        }}>쪽지함</li>
                        <li className="tab" aria-current={selectedMypageTab === 4 ? 'page' : false} onClick={() => {
                            navigate('/mypage/editprofile')
                            setSelectedMypageTab(4);
                        }}>개인정보 수정</li>
                    </ul>

                    <button id="logoutButton" onClick={() => { navigate('/main') }}>Logout</button>
                </div>

                <Routes>
                    <Route element={<Navigate to="/dashboard" replace />}></Route>
                    <Route path="/dashboard" element={
                        <>
                            <Charts weightData={weightData} setWeightData={setWeightData} skeletalMuscleMassData={skeletalMuscleMassData} />
                            <UserBodyInfo userInfo={userInfo} setUserInfo={setUserInfo} />
                        </>
                    }></Route>
                    <Route path="/goals" element={
                        <>
                            <div className="goalsMain">
                                <GoalChart userInfo={userInfo} />
                                <DietQuotes />
                            </div>
                            <UserBodyInfo userInfo={userInfo} setUserInfo={setUserInfo} />
                        </>
                    }></Route>                    

                    <Route path="/messagebox/*" element={<MessageBox />} />

                    <Route path="/editprofile" element={
                        <>
                            <EditProfile userInfo={userInfo} setUserInfo={setUserInfo}
                                weightData={weightData} setWeightData={setWeightData} />
                            <UserBodyInfo userInfo={userInfo} setUserInfo={setUserInfo} />
                        </>
                    }></Route>
                </Routes>

            </div >
        </div >
    );
}

export default MyPage;