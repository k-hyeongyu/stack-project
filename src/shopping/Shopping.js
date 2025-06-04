import { useNavigate } from 'react-router';
import './Shopping.css';

function Shopping() {

    let navigate = useNavigate();

    return (
        <div>
            <div className='shopping-header'>
                <img src='/BalancEat_logo.png' id='logo-img' onClick={()=>{navigate('/')}}></img>
                <div className='shopping-header-right'>
                    <i className="fa-solid fa-cart-shopping" onClick={() => { navigate("/shopping") }}></i>
                    <i className="fa-solid fa-user" onClick={() => { navigate("/login") }}></i>
                </div>
                <div className='shopping-seperator-line'></div>
            </div>

            <div className='shopping-container'></div>
        </div>
    )
}

export default Shopping;