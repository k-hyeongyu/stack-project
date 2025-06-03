import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

function FindId() {

    let [name, setName] = useState('')
    let [phNumber, setPhNumber] = useState('')
    let [foundId, setFoundId] = useState('')

    let navigate = useNavigate();

    return (
        <div>
            <div className='login-container'>
                <h1 className='oleo-script-regular'>BalancEat</h1>
                <p className='find-font'> - 아이디 찾기 - </p>

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

                    if (name === '김스택' && phNumber === '01012345678') {
                        setFoundId('stack123')
                    } else {
                        alert('가입정보가 없습니다.')
                        setFoundId('')
                        setName('')
                        setPhNumber('')
                    }

                }}>
                    <input type='text' value={name} className='find-textbox' placeholder='이름'
                        onChange={(event) => {
                            setName(event.target.value)
                        }}></input>
                    <input type='text' value={phNumber} className='find-textbox' placeholder='전화번호 ( - 없이 숫자만 입력)'
                        onChange={(event) => {
                            setPhNumber(event.target.value)
                        }}></input>
                    <div className='find-seperator-line'></div>
                    <button type='submit' className='find-button'>아이디 찾기</button>
                </form>
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