import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {

    let [inputId, setInputId] = useState('')
    let [inputPw, setInputPw] = useState('')

    let navigate = useNavigate();

    return (
        <div>
            <div className='login-container'>
                <h1 className='oleo-script-regular'>BalancEat</h1>
                <br></br>
                <form className='login-box' onSubmit={(event)=>{
                    event.preventDefault();

                    if(inputId === 'stack123' && inputPw === 'stack1234') {
                        navigate('/mypage/dashboard');
                        setInputId('')
                        setInputPw('')
                    } else {
                        alert ('아이디 또는 비밀번호가 올바르지 않습니다.')
                        setInputId('')
                        setInputPw('')
                    }
                    
                }}>
                    <input type='text' value={inputId} className='login-textbox' placeholder='아이디'
                    onChange={(event)=>{
                        setInputId(event.target.value)
                        console.log(event.target.value)
                    }}></input>
                    <input type='password' value={inputPw} className='login-textbox' placeholder='비밀번호'
                    onChange={(event)=>{
                        setInputPw(event.target.value)
                    }}></input>
                    
                    <button type='submit' className='login-button '>로그인</button>
                    <div className='seperator-line'></div>

                    <div className='login-find'>
                        <span id='sign-up' onClick={()=>{navigate('/SignUp')}}>회원가입</span>
                        <span> | </span>
                        <span id='find-Id' onClick={()=>{navigate('/FindId')}}>아이디 찾기</span>
                        <span> | </span>
                        <span id='find-Pw' onClick={()=>{navigate('/FindPw')}}>비밀번호 찾기</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;