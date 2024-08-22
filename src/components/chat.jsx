import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from './iconc.svg';
import SendIcon from '@mui/icons-material/Send';
import './styles/chat.css';

function Chat() {
    const [messages, setMessages] = useState([
        { from: 'AI', text: 'Bạn hãy chia sẻ vấn đề mà có thể bạn đang gặp rắc rối hoặc biến cố, tôi có thể giúp bạn bằng việc dựa trên những lá bài Tarot và đưa ra lời khuyên thích hợp.' },
        { from: 'User', text: 'Tôi đang trải qua một thời điểm cần nhiều sự cố gắng để vươn lên, có những việc tôi không muốn làm, có những việc tôi muốn làm nhưng không có thời gian làm, điều đó thật khó khăn.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const endOfMessagesRef = useRef(null);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Thêm tin nhắn mới của người dùng vào mảng tin nhắn
            setMessages(prevMessages => [
                ...prevMessages, 
                { from: 'User', text: inputValue }
            ]);
            setInputValue('');

            // Tạo phản hồi của AI sau khi gửi tin nhắn
            setTimeout(() => {
                const aiResponse = generateAIResponse(inputValue);
                setMessages(prevMessages => [
                    ...prevMessages, 
                    { from: 'AI', text: aiResponse }
                ]);
                endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 1000); // Giả lập thời gian phản hồi của AI
        }
    };

    // Hàm tạo phản hồi của AI
    const generateAIResponse = (userMessage) => {
        // Ở đây bạn có thể thay thế bằng logic hoặc API để tạo phản hồi của AI
        return 'Đây là phản hồi tự động của AI.';
    };

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className='container2'>
            <Link to="/card" className="iconlogo">
                <img src={icon} alt="ZodiacChat Logo" />
                <p>ZodiacChat</p>
            </Link>
            <div className="content2">
                <div className="chat">
                    {messages.map((message, index) => (
                        <div key={index} className={message.from === 'AI' ? 'chatAI' : 'chatUser'}>
                            <div className={message.from === 'AI' ? 'chatAIcontent' : 'chatUsercontent'}>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={endOfMessagesRef} />
                </div>
                <div>
                    <div className="send">
                        <input
                            style={{ color: "white" }}
                            type="text"
                            placeholder="Nhập vào đây để chia sẻ tâm sự của bạn"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <SendIcon onClick={handleSendMessage} style={{ cursor: 'pointer' }} />
                    </div>
                    <p className='dk'>Khi chọn nhắn tin với ZodiacChat thì bạn đã đồng ý với <b><u>điều khoản</u></b> của chúng tôi</p>
                </div>
            </div>
        </div>
    );
}

export default Chat;
