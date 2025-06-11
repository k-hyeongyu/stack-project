import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

function FindPw() {

    let [id, setId] = useState('')
    let [email, setEmail] = useState('')

    let navigate = useNavigate();

    return (
        <div className='login-page-container'>
            <div className='login-container'>
                <h1 className='oleo-script-regular login-cursor' onClick={() => {
                    navigate('/main')
                }}>BalancEat</h1>

                <form className='find-box'>
                    <div className='find-box'>
                        <input type='text' value={id} className='find-textbox' placeholder='아이디'
                            onChange={(event) => {
                                setId(event.target.value)
                            }}></input>
                        <input type='text' value={email} className='find-textbox' placeholder='이메일'
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}></input>
                    </div>

                    <button type='submit' className='find-button' onClick={(event) => {
                        event.preventDefault();
                        if (id.trim() === '') {
                            alert('아이디를 입력해주세요.')
                            return;
                        }

                        if (email.trim() === '') {
                            alert('이메일을 입력해주세요.')
                            return;
                        }

                        if (!(id === 'stack123' && email === 'stack123@naver.com')) {
                            alert('가입정보가 없습니다.')
                            setEmail('')
                            setId('')
                        } else {
                            alert('이메일로 비밀번호가 발송되었습니다.');
                            navigate('/login');
                        }
                        
                    }}>이메일 인증</button>
                </form>
                <div className='find-seperator-line'></div>
                <div className='login-find page-font'>
                    <span id='findPw-login' onClick={() => { navigate('/login') }}>로그인하기</span>
                </div>
            </div>
            
        </div>
    )
}

export default FindPw;