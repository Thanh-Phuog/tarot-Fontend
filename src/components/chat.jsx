import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import icon from './iconc.svg';
import SendIcon from '@mui/icons-material/Send';
import './styles/chat.css';

chat.propTypes = {};

function chat(props) {
    return (
        <div className='container2'>
            <Link to="/card" className="iconlogo"> {/* Use Link for navigation */}
                <img src={icon} alt="" />
                <p>ZodiacChat</p>
            </Link>
            <div className="content2">
                <div className="chat">
                    <div className="chatAI">
                        <div className="chatAIcontent">
                            <p>Bạn hãy chia sẻ vấn đề mà có thể bạn đang gặp rắc rối hoặc biến cố, tôi có thể giúp bạn bằng việc dựa trên những lá bài Tarot và đưa ra lời khuyên thích hợp.</p>
                        </div>
                    </div>
                    <div className="chatUser">
                        <div className="chatUsercontent">
                            <p>Tôi đang trải qua một thời điểm cần nhiều sự cố gắng để vươn lên, có những việc tôi không muốn làm, có những việc tôi muốn làm nhưng không có thời gian làm, điều đó thật khó khăn.</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className="send">
                    <input type="text" placeholder="Nhập vào đây để chia sẻ tâm sự của bạn" />
                    <SendIcon />
                </div>
                <p className='dk'>Khi chọn nhắn tin với ZodiacChat thì bạn đã đồng ý với <b><u>điều khoản</u></b> của chúng tôi</p>
            </div></div>
        </div>
    );
}

export default chat;
