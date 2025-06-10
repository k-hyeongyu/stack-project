import { useState } from 'react';
import './MsgWrtModal.css'

function MsgWrtModal({ inboxMessageData, setInboxMessageData, showMsgWrtModal, setShowMsgWrtModal, sentMessageData, setSentMessageData }) {

    const [inputTo, setInputTo] = useState('');
    const [inputContent, setInputContent] = useState('');

    return (
        <div className="wrtModal">
            <div className='msgDestination'>
                <h3>받는사람</h3>
                <input type='text' onChange={(event) => {
                    setInputTo(event.target.value);
                }}></input>
            </div>
            <div className='msgContent'>
                <h3>내용</h3>
                <textarea className='msgText' onChange={(event) => {
                    setInputContent(event.target.value)
                }} />
            </div>
            <div className='modalButtons'>
                <button className='quitBtn' onClick={() => {
                    setShowMsgWrtModal(!showMsgWrtModal);
                }}>취소</button>
                <button className='sendBtn' onClick={() => {
                    setSentMessageData([...inboxMessageData,
                    {
                        id: '105',
                        name: inputTo,
                        date: '25.06.13',
                        content: inputContent
                    }
                    ])
                    setShowMsgWrtModal(!showMsgWrtModal);
                }}>보내기</button>
            </div>
        </div>
    );
}

export default MsgWrtModal;