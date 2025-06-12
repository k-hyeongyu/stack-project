import { useState } from 'react';
import './EditProfile.css'
import { useNavigate } from "react-router-dom";

function EditProfile(props) {

    const navigate = useNavigate();
    const [userAge, setUseAge] = useState(50);
    const [userHeight, setUserHeight] = useState(170);
    const [userWeight, setUserWeight] = useState(70);


    return (
        <div className="editProfileContainer">
            <h3>기본 정보</h3>
            <hr className='topHr'></hr>
            <div className='profileInfo'>
                이름 <input type='text' placeholder={props.userInfo.name} onChange={(event) => {
                    props.setUserInfo(
                        {
                            ...props.userInfo,
                            name: event.target.value
                        }
                    );
                }}></input>
            </div>
            <hr></hr>
            <div className='profileInfo'>
                이메일 <input type='email' placeholder={props.userInfo.email} onChange={(event) => {
                    props.setUserInfo(
                        {
                            ...props.userInfo,
                            email: event.target.value
                        }       
                    );
                }}></input>
            </div>
            <hr></hr>
            <div className='profileInfo'>
                비밀번호 <input type='password' placeholder='●●●●●●●●●' onChange={(event) => {
                    props.setUserInfo(
                        {
                            ...props.userInfo,
                            password: event.target.value
                        }
                    );
                }}></input>
            </div>
            <hr></hr>
            <div className='profileInfo'>
                비밀번호 확인 <input type='password' placeholder='●●●●●●●●●' onChange={(event) => {
                    props.setUserInfo(
                        {
                            ...props.userInfo,
                            passwordcheck: event.target.value
                        }
                    );

                }}></input>
            </div>

            <hr></hr>                                               
            <div className='profileInfo'>
                전화번호 <input type='tel' placeholder={props.userInfo.tel} onChange={(event) => {
                    props.setUserInfo(
                        {
                            ...props.userInfo,
                            tel: event.target.value
                        }
                    );
                }}></input>
            </div>
            <hr></hr>
            <h3>신체 정보</h3>
            <hr className='topHr'></hr>
            <div className='profileInfo'>
                나이 <input type='number' placeholder={userAge} onChange={(event) => {
                    setUseAge(event.target.value)
                }}></input>
            </div>
            <hr></hr>
            <div className='profileInfo'>
                키 <input type='number' placeholder={userHeight} onChange={(event) => {                    
                    setUserHeight(event.target.value);
                }}></input>
            </div>
            <hr></hr>
            <div className='profileInfo'>
                몸무게 <input type='number' placeholder={userWeight} onChange={(event) => {
                   setUserWeight(event.target.value);

                    let temp = [...props.weightData];
                    temp.splice(0, 1);
                    temp.unshift(event.target.value);
                    props.setWeightData(temp);
                }}></input>
            </div>
            <hr></hr>
            <button onClick={(event) => {
                if(props.userInfo.password != props.userInfo.passwordcheck){
                    alert('비밀번호가 다릅니다')
                    return;
                }
                props.setUserInfo(
                        {
                            ...props.userInfo,
                            age: userAge,
                            height: userHeight,
                            weight: userWeight
                        }
                );
                navigate('/mypage/dashboard')
            }}>수정</button>
        </div>
    );
}

export default EditProfile;