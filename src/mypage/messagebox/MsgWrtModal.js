import { useState } from 'react';
import './MsgWrtModal.css'

function MsgWrtModal(props){

    const [inputTo, setInputTo] = useState('');
    const [inputContent, setInputContent] = useState('');

    return(
        <div className="wrtModal">
            <div className='msgDestination'>
                <h3>받는사람</h3>
                <input type='text' onChange={(event)=>{
                    setInputTo(event.target.value);
                }}></input>
            </div>
            <div className='msgContent'>
                <h3>내용</h3>
                <textarea className='msgText' onChange={(event)=>{
                    setInputContent(event.target.value)    
                }}/>
            </div>
            <div className='modalButtons'>
                <button className='quitBtn' onClick={()=>{
                    props.setShowMsgWrtModal(!props.showMsgWrtModal);
                }}>취소</button>
                <button className='sendBtn'>보내기</button>                
            </div>
        </div>
    );
}

export default MsgWrtModal;