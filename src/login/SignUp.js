import { useNavigate } from 'react-router';
import './Login.css';
import { useState } from 'react';

function SignUp(){

    let [values, setValues] = useState({name:'', id:'', pw:'', confirmPw:'', phoneNumber:''})

    let handleChange = (event) => {
        let {name, value} = event.target;
    }

    let navigate = useNavigate();

    return(
        <div>
            <div className='signUp-container'>
                <form className='login-box'>
                    <input type='text' name='name' value={values.name} placeholder='이름' className='login-textbox'></input>
                    <input type='text' name='id' value={values.id} placeholder='아이디' className='login-textbox'></input>
                    <input type='text' name='pw' value={values.pw} placeholder='비밀번호' className='login-textbox'></input>
                    <input type='text' name='confirmPw' value={values.confirmPw} placeholder='비밀번호 확인' className='login-textbox'></input>
                    <input type='text' name='phoneNumber' value={values.phoneNumber} placeholder='전화번호' className='login-textbox'></input>
                </form>
            </div>
        </div>
    )
}

export default SignUp;

