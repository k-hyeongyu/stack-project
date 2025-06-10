
import MsgWrtModal from "./MsgWrtModal";

function InboxMessages( {showMsgWrtModal, setShowMsgWrtModal, inboxMessageData, setInboxMessageData, 
                        chooseInboxMsgIndex, setChooseInboxMsgIndex, sentMessageData, setSentMessageData} ) {
    
    return (
        <div className="messageBoxContainer">
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
            {showMsgWrtModal && <MsgWrtModal inboxMessageData={inboxMessageData} setInboxMessageData={setInboxMessageData}
                                                showMsgWrtModal={showMsgWrtModal} setShowMsgWrtModal={setShowMsgWrtModal}
                                                sentMessageData={sentMessageData} setSentMessageData={setSentMessageData}
            />}
        </div>
    );
}

function SentMessages( {showMsgWrtModal, setShowMsgWrtModal, inboxMessageData, setInboxMessageData,
                        sentMessageData, setSentMessageData, chooseSentMsgIndex, setChooseSentMsgIndex}) {
    
    return (
        <div className="messageBoxContainer">
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
            
            <button className='msgBoxDelBtn msgBtn' onClick={() => {
                                                        //현재배열요소 무시 : _    체크되지 않은 요소들만 모아서 배열로 반환
                const newSentMessageData = sentMessageData.filter((_, index) => !chooseSentMsgIndex[index]);

                // 새로운 메시지 데이터로 상태 업데이트
                setSentMessageData(newSentMessageData);

                // 메시지 데이터가 변경되었으므로, 체크박스 상태 배열도 새로운 길이에 맞추기
                setChooseSentMsgIndex(new Array(newSentMessageData.length).fill(false));

            }}>선택삭제</button>
            <button className='msgBoxWrtBtn msgBtn' onClick={()=>{
                setShowMsgWrtModal(!showMsgWrtModal);                
            }}>쪽지쓰기</button>
            
            {showMsgWrtModal && <MsgWrtModal inboxMessageData={inboxMessageData} setInboxMessageData={setInboxMessageData}
                                                showMsgWrtModal={showMsgWrtModal} setShowMsgWrtModal={setShowMsgWrtModal}
                                                sentMessageData={sentMessageData} setSentMessageData={setSentMessageData}
            />}
        </div>
    );

}

export { InboxMessages, SentMessages }; 