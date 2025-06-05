import React from "react";
import './MyPage.css'
import ConditionChart from "./ConditionChart";
import BodyChart from "./BodyChart";

function MyPage(){
    return(
        <div id="myPageContent">
            <div id="myPageheader">
                <div id="logo">로고</div>
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
                    
                </div>
            </div>    
        </div>
    );
}

export default MyPage;