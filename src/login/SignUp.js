import { useNavigate } from 'react-router';
import './Login.css';
import { useState } from 'react';

function SignUp() {

    let [values, setValues] = useState({ name: '', id: '', pw: '', confirmPw: '', phoneNumber: '' })

    let handleChange = (event) => {
        let { name, value } = event.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }))
    }

    let navigate = useNavigate();

    return (
        <div>
            <div className='signUp-container'>
                <h1 className='oleo-script-regular'>BalancEat</h1>
                <p className='signUp-font'> - 회원가입 - </p>
                <form className='login-box' onSubmit={(event) => {
                    event.preventDefault();

                    if (values.name.trim() === '') {
                        alert('이름을 입력해주세요.');
                        return;
                    }
                    if (values.id.trim() === '') {
                        alert('아이디를 입력해주세요.');
                        return;
                    }
                    if (values.pw.trim() === '') {
                        alert('비밀번호를 입력해주세요.');
                        return;
                    }
                    if (values.confirmPw.trim() === '') {
                        alert('비밀번호를 확인해주세요.');
                        return;
                    }
                    if (values.pw !== values.confirmPw) {
                        alert('비밀번호가 일치하지 않습니다.');
                        return;
                    }
                    if (values.phoneNumber.trim() === '') {
                        alert('전화번호를 입력해주세요.');
                        return;
                    }

                    alert('가입이 완료되었습니다!')
                    navigate('/login')
                }}>
                    <input type='text' name='name' value={values.name} onChange={handleChange} placeholder='이름' className='login-textbox'></input>
                    <input type='text' name='id' value={values.id} onChange={handleChange} placeholder='아이디' className='login-textbox'></input>
                    <input type='password' name='pw' value={values.pw} onChange={handleChange} placeholder='비밀번호' className='login-textbox'></input>
                    <input type='password' name='confirmPw' value={values.confirmPw} onChange={handleChange} placeholder='비밀번호 확인' className='login-textbox'></input>
                    <input type='text' name='phoneNumber' value={values.phoneNumber} onChange={handleChange} placeholder='전화번호 ( - 없이 숫자만 입력)' className='login-textbox'></input>

                    <button type='submit' className='login-button'>가입 완료</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;

