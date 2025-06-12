import './Footer.css';

const Footer = () => {
    return (

        <footer id="footer" className="footer-container">
            <div className="footer-info-left">
                <div className="footer-info">
                    <strong>고객센터</strong>
                </div>
                <div className="footer-csInfo footer-infoFontSize">
                    <div className='footer-infoStyle'>
                        <span className="pdr10">Tel</span> <span id='footer-csTel'>1600-4853</span>
                    </div>
                    <div>
                        E-mail <span>support@balanceat.com</span>
                    </div>
                    <div id='footer-cstime'>
                        <span>평일 오전 10시 ~ 오후 5시 (점심시간 : 12시~13시)</span>
                    </div>
                </div>
                <div>
                    <button className='footer-csButton' onClick={()=>{
                        alert('지금은 영업시간이 아닙니다.')
                    }}>1:1 문의하기</button>
                </div>
            </div>
            
            <div className="footer-info-mid">
                <div className="footer-info">
                    <strong>밸런잇 정보</strong>
                </div>
                <div className="footer-shopInfo footer-infoFontSize">
                    <div className='footer-infoStyle'>
                        <span>(주)밸런잇</span> <span>대표 김도택</span>
                    </div>
                    <div>
                        <span>사업장 주소</span> <span>충청남도 천안시 동남구 대흥동 134</span>
                    </div>
                    <div>
                        <span>대표 전화</span> <span>041-561-1122</span>
                    </div>
                    <div>
                        <span>사업자 등록번호</span> <span>226-78-00202</span>
                    </div>
                    <div>
                        <span>통신판매업 신고번호</span> <span>제2025-천안-0612 [사업자정보확인]</span>
                    </div>
                    <div>
                        <span>개인정보보호책임자</span> <span>박관호</span>
                    </div>
                </div>
            </div>

            <div className="footer-info-right">
                <div className="footer-info">
                    <strong>입금계좌정보</strong>
                </div>
                <div className="footer-payInfo footer-infoFontSize footer-infoStyle">
                    <div id='footer-depositerInfo'>
                        <span>예금주명</span> <span>(주)밸런잇</span>
                    </div>
                    <div>
                        <span>국민은행 </span> <span>701802-05-276112</span>
                    </div>
                    <div>
                        <span>신한은행 </span> <span>110-538-226570</span>
                    </div>
                    <div>
                        <span>농협은행 </span> <span>351-0151-0404-32</span>
                    </div>
                    <div>
                        <span>기업은행 </span> <span>982-151792-01-101</span>
                    </div>
                </div>
                
            </div>

        </footer>
    );
}
export default Footer;