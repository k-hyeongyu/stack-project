import React, { useState } from "react";
import './MyPage.css'
import Charts from "./dashboard/Charts";
import UserBodyInfo from "./dashboard/UserBodyInfo";
import EditProfile from "./editprofile/EditProfile";
import { Routes, Route, useNavigate, Navigate  } from "react-router-dom";

function MyPage(){
    
    const navigate = useNavigate();

    // 체중 데이터 하드코딩
    const [weightData, setWeightData] = useState(['77', '76.8', '76.5', '75.7', '76.1', '75.2', 
                             '75.3', '74.1', '73.7', '73.5', '73.1', '72.7'
                        ].reverse());

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

    return(
        <div id="myPageContainer">
            <div id="myPageheader">
                <div id="logo" onClick={()=>{navigate('/main')}}><img src={process.env.PUBLIC_URL+"/images/BalancEat_logo.png"} id="logoImg"></img></div>
                <div id="user">{userInfo.name}님 <i className="fa-solid fa-user"></i> </div>
            </div>

            <div id="myPageMain">
                <div id="tabs"> 
                    <ul className="tablist">
                        <li className="tab" onClick={()=>{navigate('/mypage/dashboard')}}>대시보드</li>
                        <li className="tab" onClick={()=>{navigate('/mypage/messages')}}>쪽지함</li>
                        <li className="tab" onClick={()=>{navigate('/mypage/goals')}}>목표관리</li>
                        <li className="tab" onClick={()=>{navigate('/mypage/editprofile')}}>개인정보 수정</li>
                    </ul>

                    <button id="logoutButton" onClick={()=>{navigate('/main')}}>Logout</button>
                </div>

                <Routes>
                    <Route path="/mypage" element={<Navigate to="/mypage/dashboard" replace />}></Route>
                    <Route path="/mypage/dashboard" element={
                        <>
                            <Charts weightData={weightData} setWeightData={setWeightData}/>
                            <UserBodyInfo userInfo={userInfo} setUserInfo={setUserInfo}/>
                        </>
                    }></Route>
                    <Route path="/mypage/editprofile" element={
                        <>
                            <EditProfile userInfo={userInfo} setUserInfo={setUserInfo} 
                                        weightData={weightData} setWeightData={setWeightData}/>
                            <UserBodyInfo userInfo={userInfo} setUserInfo={setUserInfo}/>
                        </>
                    }></Route>
                </Routes>

                
            </div>    
        </div>
    );
}

export default MyPage;