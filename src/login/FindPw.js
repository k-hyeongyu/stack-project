import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

function FindPw() {

    let [name, setName] = useState('')
    let [id, setId] = useState('')
    let [foundPw, setFoundPw] = useState('')

    let navigate = useNavigate();

    return (
        <div className='login-page-container'>
            <div className='login-container'>
                <h1 className='oleo-script-regular'>BalancEat</h1>
                {/* <p className='page-font'> 비밀번호 찾기 </p> */}

                <form className='find-box' onSubmit={(event) => {
                    event.preventDefault();

                    if (name.trim() === '') {
                        alert('이름을 입력해주세요.')
                        return;
                    }

                    if (id.trim() === '') {
                        alert('아이디를 입력해주세요.')
                        return;
                    }

                    if (name === '김스택' && id === 'stack123') {
                        setFoundPw('stack1234')
                    } else {
                        alert('가입정보가 없습니다.')
                        setFoundPw('')
                        setName('')
                        setId('')
                    }

                }}>
                    <div className='find-box'>
                        <input type='text' value={name} className='find-textbox' placeholder='이름'
                            onChange={(event) => {
                                setName(event.target.value)
                            }}></input>
                        <input type='text' value={id} className='find-textbox' placeholder='아이디'
                            onChange={(event) => {
                                setId(event.target.value)
                            }}></input>
                    </div>
                    <button type='submit' className='find-button'>비밀번호 찾기</button>
                </form>
                <div className='find-seperator-line'></div>
                <div className='login-find'>
                    <span id='findPw-login' onClick={() => { navigate('/login') }}>로그인하기</span>
                </div>
            </div>
            {
                foundPw && (
                    <div className='foundId-text'>
                        <p>{name}님의 비밀번호는 <strong>{foundPw}</strong>입니다.</p>
                    </div>
                )
            }
        </div>
    )
}

export default FindPw;