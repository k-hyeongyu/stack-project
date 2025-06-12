import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

function FindId() {

    let [name, setName] = useState('')
    let [phNumber, setPhNumber] = useState('')
    let [foundId, setFoundId] = useState('')

    let navigate = useNavigate();

    return (
        <div className='login-page-container'>
            <div className='login-container'>
                <h1 className='oleo-script-regular login-cursor' onClick={() => {
                    navigate('/main')
                }}>BalancEat</h1>
                <form className='find-box' onSubmit={(event) => {
                    event.preventDefault();

                    if (name.trim() === '') {
                        alert('이름을 입력해주세요.')
                        return;
                    }

                    if (phNumber.trim() === '') {
                        alert('전화번호를 입력해주세요.')
                        return;
                    }

                    if (name === '김도택' && phNumber === '01012345678') {
                        setFoundId('st****23')
                    } else {
                        alert('가입정보가 없습니다.')
                        setFoundId('')
                        setName('')
                        setPhNumber('')
                    }

                }}>
                    <div className='find-box'>
                        <input type='text' value={name} className='find-textbox' placeholder='이름'
                            onChange={(event) => {
                                setName(event.target.value)
                            }}></input>
                        <input type='text' value={phNumber} className='find-textbox' placeholder='전화번호 ( - 없이 숫자만 입력)'
                            onChange={(event) => {
                                setPhNumber(event.target.value)
                            }}></input>
                    </div>
                    <button type='submit' className='find-button'>아이디 찾기</button>
                </form>

                <div className='find-seperator-line'></div>
                <div className='login-find page-font'>
                    <span id='findId-login' onClick={() => { navigate('/login') }}>로그인하기</span>
                </div>

            </div>

            {
                foundId && (
                    <div className='foundId-text'>
                        <p>{name}님의 아이디는 <strong>{foundId}</strong>입니다.</p>
                    </div>
                )
            }
        </div>
    )
}

export default FindId;