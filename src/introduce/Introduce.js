import './Introduce.css';

function Introduce() {
    return (
        <div className="intro-vid-container">
            <video className="intro-vid" src='/bgVideo01.mp4' autoPlay muted loop></video>
            <h2>
                보색(complementary color, 補色)은 
                <br></br>색상 대비를 이루는 한 쌍의 색상을 말한다. 
                <br></br>일반적으로는 미술이나 인쇄에서 사용되는 감산혼합에 기반한 색상의 쌍을 보색이라고 <br></br>하나 색 공간에 따라 서로 쌍이 되는 보색은 달라진다.
                보색(complementary color, 補色)은 
                <br></br>색상 대비를 이루는 한 쌍의 색상을 말한다. 
                색상 대비를 이루는 한 쌍의 색상을 말한다. 기반한 색상의 <br></br>쌍을 보색이라고 하나 색 공간에 따라 서로 쌍이 되는 보색은 달라진다.
            </h2>
            <button className='intro-button'>식단 소개</button>
        </div>
    )
}

export default Introduce;