import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './MessageBox.css'
import messageData from './messageData';

function MessageBox() {

    const navigate = useNavigate();

    return (
        <div className="messageBox">
            <ul className='messageBoxTabs'>
                <li className='boxTab' onClick={() => { navigate('/mypage/messagebox/inbox') }}>받은쪽지함</li>
                <li className='boxTab' onClick={() => { navigate('/mypage/messagebox/sent') }}>보낸쪽지함</li>
                <li className='boxTab' onClick={() => { navigate('/mypage/messagebox/saved') }}>쪽지보관함</li>
            </ul>

            <Routes>
                 <Route index element={<Navigate to="inbox" replace />} /> 

                <Route path='inbox' element={
                    <>
                        {
                            messageData.map((item, index) => {
                                return (
                                    <div className='messages'>
                                        <div className='messageCotent'>
                                            <h3>{item.name}</h3>
                                            <p>{item.content}</p>
                                        </div>
                                        {item.date}
                                    </div>
                                );
                            })
                        }
                    </>
                }></Route>
                <Route path='sent' element={
                    <>

                    </>
                }></Route>
                <Route path='saved' element={
                    <>

                    </>
                }></Route>
            </Routes>
        </div>
    );
}

export default MessageBox;