import React from "react";
import './MyPage.css'
import ConditionChart from "./ConditionChart";
import BodyChart from "./BodyChart";

function MyPage(){
    return(
        <div id="myPageContainer">
            <div id="myPageheader">
                <div id="logo"><img src={process.env.PUBLIC_URL+"/images/BalancEat_logo.png"} id="logoImg"></img></div>
                <div id="user">사용자님</div>
            </div>

            <div id="myPageMain">
                <div id="tabs"> 
                    <ul className="tablist">
                        <li className="tab">대시보드</li>
                        <li className="tab">쪽지함</li>
                        <li className="tab">목표관리</li>
                    </ul>

                    <button id="logoutButton">Logout</button>
                </div>

                <div className="bodyConditionGraphs">
                    <div id="bodyChart">
                        <BodyChart />
                    </div>
                    <div id="conditionChart">
                        <ConditionChart />
                    </div>
                </div>

                <div id="userBodyInfo">
                    {/* <img src={process.env.PUBLIC_URL+"/bodyImg.jpg"} id="bodyImg"></img> */}
                    
                    <div className="bodyInfo">
                        <h3>나이</h3>
                        <p>50세</p>
                        <h3>키</h3>
                        <p>170cm</p>
                        <h3>몸무게</h3>
                        <p>70kg</p>
                        <h3>BMI</h3>
                        <p>{(70/(1.7*1.7)).toFixed(2)}</p>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default MyPage;