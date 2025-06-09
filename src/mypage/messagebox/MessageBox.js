import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './MessageBox.css'
import {InboxMessages, SentMessages} from './MessageData';

function MessageBox() {

    const navigate = useNavigate();

    return (
        <div className="messageBox">
            <ul className='messageBoxTabs'>
                <li className='boxTab tab1' onClick={() => { navigate('/mypage/messagebox/inbox') }}>받은쪽지함</li>
                <li className='boxTab tab2' onClick={() => { navigate('/mypage/messagebox/sent') }}>보낸쪽지함</li>                
            </ul>

            <Routes>
                 <Route index element={<Navigate to="inbox" replace />} /> 

                <Route path='inbox' element={
                    <InboxMessages />
                }></Route>
                <Route path='sent' element={                    
                    <SentMessages />
                }></Route>
            </Routes>
        </div>
    );
}

export default MessageBox;