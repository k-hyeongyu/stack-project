import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './MessageBox.css'
import { InboxMessages, SentMessages } from './inboxSentMsg';

function MessageBox() {

    const navigate = useNavigate();

    // 받은쪽지함 정보
    const [inboxMessageData, setInboxMessageData] = useState([
        {
            id: '001',
            name: '운영자',
            date: '25.06.01',
            content: '안녕하세요. 저희 사이트에 가입해주셔서 감사합니다.'
        },
        {
            id: '002',
            name: '푸름',
            date: '25.06.05',
            content: '안녕하세요. 잘부탁드립니다.'
        }
    ]);

    // 받은쪽지함에서 선택삭제를 위해 선택된 요소들 boolean변수로 배열에 담기
    // 정보를 담고있는 inboxMessageData 배열 길이와 같은 boolean배열 생성
    const [chooseInboxMsgIndex, setChooseInboxMsgIndex] = useState(new Array(inboxMessageData.length).fill(false));


    // 보낸쪽지함 정보
    const [sentMessageData, setSentMessageData] = useState([
        {
            id: '101',
            name: '푸름',
            date: '25.06.04',
            content: '안녕하세요. 처음 가입했습니다. 잘부탁드려요~'
        },        
        {
            id: '102',
            name: '가렌',
            date: '25.06.05',
            content: '안녕하세요 푸름님께서 소개해주셨어요 잘부탁드립니다!!'
        }
    ])

    // 보낸쪽지함에서 선택삭제를 위해 선택된 요소들 boolean변수로 배열에 담기
    // 정보를 담고있는 SentMessages 배열 길이와 같은 boolean배열 생성
    const [chooseSentMsgIndex, setChooseSentMsgIndex] = useState(new Array(sentMessageData.length).fill(false));


    // 모달창 보여주기 boolean 변수
    const [showMsgWrtModal, setShowMsgWrtModal] = useState(false);

    return (
        <div className="messageBox">
            <ul className='messageBoxTabs'>
                <li className='boxTab tab1' onClick={() => { navigate('/mypage/messagebox/inbox') }}>받은쪽지함</li>
                <li className='boxTab tab2' onClick={() => { navigate('/mypage/messagebox/sent') }}>보낸쪽지함</li>
            </ul>

            <Routes>
                <Route index element={<Navigate to="inbox" replace />} />

                <Route path='inbox' element={
                    <InboxMessages showMsgWrtModal={showMsgWrtModal} setShowMsgWrtModal={setShowMsgWrtModal}
                        inboxMessageData={inboxMessageData} setInboxMessageData={setInboxMessageData}
                        sentMessageData={sentMessageData} setSentMessageData={setSentMessageData}
                        chooseInboxMsgIndex={chooseInboxMsgIndex} setChooseInboxMsgIndex={setChooseInboxMsgIndex}
                    />
                }></Route>
                <Route path='sent' element={
                    <SentMessages showMsgWrtModal={showMsgWrtModal} setShowMsgWrtModal={setShowMsgWrtModal}
                        inboxMessageData={inboxMessageData} setInboxMessageData={setInboxMessageData}
                        sentMessageData={sentMessageData} setSentMessageData={setSentMessageData}
                        chooseSentMsgIndex={chooseSentMsgIndex} setChooseSentMsgIndex={setChooseSentMsgIndex}
                    />
                }></Route>
            </Routes>
        </div>
    );
}

export default MessageBox;