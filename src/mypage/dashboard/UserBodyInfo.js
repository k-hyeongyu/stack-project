import './UserBodyInfo.css';
function UserBodyInfo(props) {
    
    const getBmi = ()=>{ return props.userInfo.weight/( (props.userInfo.height/100)*(props.userInfo.height/100) )};
    

    return (
        <div id="userBodyInfo">
            {/* <img src={process.env.PUBLIC_URL+"/bodyImg.jpg"} id="bodyImg"></img> */}

            <div className="bodyInfo">
                <h3>나이</h3>
                <p>{props.userInfo.age}세</p>
                <h3>키</h3>
                <p>{props.userInfo.height}cm</p>
                <h3>몸무게</h3>
                <p>{props.userInfo.weight}kg</p>
                <h3>BMI</h3>
                <p>{getBmi().toFixed(2)}</p>
            </div>
        </div>
    );
}

export default UserBodyInfo;