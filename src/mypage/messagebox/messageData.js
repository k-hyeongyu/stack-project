import { useState } from "react";
import MsgWrtModal from "./MsgWrtModal";

function InboxMessages() {
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
                                                        // 정보를 담고있는 inboxMessageData 배열 길이와 같은 boolean배열 생성
    const [chooseInboxMsgIndex, setChooseInboxMsgIndex] = useState(new Array(inboxMessageData.length).fill(false));

    const [showMsgWrtModal, setShowMsgWrtModal] = useState(false);
    return (
        <>
            {
                inboxMessageData.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div className='messages'>
                                <div className='messageCotent'>
                                    <input type='checkbox' id={item.id} onChange={(event) => {
                                        let temp = [...chooseInboxMsgIndex];
                                        temp[index] = event.target.checked;
                                        setChooseInboxMsgIndex(temp);
                                    }}></input>
                                    <div>
                                        <label for={item.id}>
                                            <h3>From. {item.name}</h3>
                                            <p>{item.content}</p>
                                        </label>
                                    </div>
                                </div>
                                {item.date}
                            </div>
                        </div>
                    );
                })
            }

            <button className='msgBoxDelBtn msgBtn' onClick={() => {
                const newInboxMessageData = inboxMessageData.filter((_, index) => !chooseInboxMsgIndex[index]);

                // 새로운 메시지 데이터로 상태 업데이트
                setInboxMessageData(newInboxMessageData);

                // 메시지 데이터가 변경되었으므로, 체크박스 상태 배열도 새로운 길이에 맞추기
                setChooseInboxMsgIndex(new Array(newInboxMessageData.length).fill(false));
            }}>선택삭제</button>
            <button className='msgBoxWrtBtn msgBtn' onClick={()=>{
                setShowMsgWrtModal(!showMsgWrtModal);                
            }}>쪽지쓰기</button>
            {showMsgWrtModal && <MsgWrtModal showMsgWrtModal={showMsgWrtModal} 
                                            setShowMsgWrtModal={setShowMsgWrtModal} />}
        </>
    );
}

function SentMessages() {
    const [sentMessageData, setSentMessageData] = useState([
        {
            id: '101',
            name: '푸름',
            date: '25.06.04',
            content: '안녕하세요. 처음 가입했습니다. 잘부탁드려요~'
        },
        {
            id: '102',
            name: '초록나무',
            date: '25.06.04',
            content: '안녕하세요. 처음 가입했어요. 잘부탁드립니다~'
        },
        {
            id: '103',
            name: '가렌',
            date: '25.06.05',
            content: '안녕하세요 푸름님께서 소개해주셨어요 잘부탁드립니다!!'
        }
    ])
                                                            // 정보를 담고있는 SentMessages 배열 길이와 같은 boolean배열 생성
    const [chooseSentMsgIndex, setChooseSentMsgIndex] = useState(new Array(SentMessages.length).fill(false));
    return (
        <>
            {
                sentMessageData.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div className='messages'>
                                <div className='messageCotent'>
                                    <input type='checkbox' id={item.id} onChange={(event) => {
                                        let temp = [...chooseSentMsgIndex];
                                        temp[index] = event.target.checked;
                                        setChooseSentMsgIndex(temp);
                                    }}></input>
                                    <div>
                                        <label for={item.id}>
                                            <h3>To. {item.name}</h3>
                                            <p>{item.content}</p>
                                        </label>
                                    </div>
                                </div>
                                {item.date}
                            </div>
                        </div>
                    );
                })
            }

            <button className='msgBoxDelBtn' onClick={() => {
                                                        //현재배열요소 무시 : _    체크되지 않은 요소들만 모아서 배열로 반환
                const newSentMessageData = sentMessageData.filter((_, index) => !chooseSentMsgIndex[index]);

                // 새로운 메시지 데이터로 상태 업데이트
                setSentMessageData(newSentMessageData);

                // 메시지 데이터가 변경되었으므로, 체크박스 상태 배열도 새로운 길이에 맞추기
                setChooseSentMsgIndex(new Array(newSentMessageData.length).fill(false));

            }}>선택삭제</button>
            <button className='msgBoxWrtBtn msgBtn'>쪽지쓰기</button>
        </>
    );

}

export { InboxMessages, SentMessages }; 