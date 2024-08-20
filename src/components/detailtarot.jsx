import React, { useEffect, useState } from 'react';
import './styles/detail.css'; // Your custom styles

function DetailTarot(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesData = [
        {
            image: "https://tarot.com.vn/storage/app/media/The-Fool/The-fool-xuoi.jpg",
            description: "The Fool - Lá bài của sự khởi đầu mới và tiềm năng. Nó biểu thị một hành trình mới, thường là một cơ hội mà bạn cần tận dụng với sự dũng cảm và trí tưởng tượng.",
            meaning: "Lá bài này có thể biểu thị một chuyến đi mới, một khởi đầu mới hoặc sự vô tư. Nó khuyến khích bạn mở lòng và sẵn sàng tiếp nhận những cơ hội mới trong cuộc sống.",
            reversedMeaning: "Khi bị đảo ngược, The Fool có thể chỉ ra sự thiếu chuẩn bị, sự mạo hiểm không cần thiết hoặc cảm giác bị lạc lối."
        },
        {
            image: "https://tarot.com.vn/storage/app/media/The-Magician/The-magician-xuoi.jpg",
            description: "The Magician - Lá bài của khả năng và tài năng. Nó cho thấy sức mạnh của sự sáng tạo và khả năng biến ý tưởng thành hiện thực bằng cách sử dụng các tài nguyên hiện có.",
            meaning: "The Magician biểu thị khả năng khai thác tiềm năng của bạn và sử dụng các công cụ và tài nguyên xung quanh để đạt được mục tiêu của mình. Đây là dấu hiệu của sự thành công và sự tự tin.",
            reversedMeaning: "Khi bị đảo ngược, The Magician có thể chỉ ra sự thiếu tự tin, sự lừa dối hoặc cảm giác không kiểm soát được các tình huống."
        },
        {
            image: "https://tarot.com.vn/storage/app/media/The-High-Priestess/The-high-priestess-xuoi.jpg",
            description: "The High Priestess - Lá bài của sự trực giác và bí ẩn. Nó đại diện cho khả năng hiểu sâu và kết nối với các khía cạnh bí mật của bản thân và cuộc sống.",
            meaning: "The High Priestess khuyến khích bạn lắng nghe trực giác của mình và tìm kiếm sự hiểu biết sâu sắc hơn về những điều ẩn chứa trong cuộc sống. Đây là lúc để bạn tin tưởng vào cảm giác của mình.",
            reversedMeaning: "Khi bị đảo ngược, The High Priestess có thể chỉ ra sự mơ hồ, sự thiếu hiểu biết hoặc sự không thể kết nối với trực giác của bạn."
        },
        {
            image: "https://tarot.com.vn/storage/app/media/The-Emperor/The-Emperor-xuoi.jpg",
            description: "The Emperor - Lá bài của quyền lực và sự kiểm soát. Nó biểu thị sự lãnh đạo mạnh mẽ, tổ chức và khả năng quản lý các tình huống một cách hiệu quả.",
            meaning: "The Emperor thể hiện sự ổn định và tổ chức. Bạn có khả năng kiểm soát tình hình và đưa ra quyết định quan trọng. Đây là thời điểm để thể hiện sự lãnh đạo và trách nhiệm.",
            reversedMeaning: "Khi bị đảo ngược, The Emperor có thể chỉ ra sự áp bức, sự thiếu kiểm soát hoặc cảm giác bị mất quyền lực."
        },
        {
            image: "https://tarot.com.vn/storage/app/media/The-Empress/The-Empress-xuoi.jpg",
            description: "The Empress - Lá bài của sự phong phú và sự sáng tạo. Nó biểu thị sự nuôi dưỡng, sự sáng tạo và khả năng tạo ra sự phát triển và sự thịnh vượng.",
            meaning: "The Empress đại diện cho sự phong phú và sự nuôi dưỡng. Đây là thời điểm để chăm sóc bản thân và những người xung quanh. Sự sáng tạo của bạn đang ở đỉnh cao.",
            reversedMeaning: "Khi bị đảo ngược, The Empress có thể chỉ ra sự thiếu chăm sóc, sự khó khăn trong việc tạo ra hoặc sự cảm giác không thỏa mãn."
        },
        {
            image: "https://tarot.com.vn/storage/app/media/The-Lovers/The-lovers-xuoi.jpg",
            description: "The Lovers - Lá bài của tình yêu và sự lựa chọn. Nó biểu thị sự kết nối sâu sắc, sự hòa hợp và quyết định quan trọng trong các mối quan hệ.",
            meaning: "The Lovers thể hiện sự hòa hợp và tình yêu. Đây là thời điểm để bạn xem xét các quyết định quan trọng liên quan đến mối quan hệ và sự kết nối với người khác.",
            reversedMeaning: "Khi bị đảo ngược, The Lovers có thể chỉ ra sự bất hòa, sự khó khăn trong mối quan hệ hoặc sự thiếu quyết định."
        },
        {
            image: "https://tarot.com.vn/storage/app/media/The-Chariot/The-Chariot-xuoi.jpg",
            description: "The Chariot - Lá bài của sự kiểm soát và chiến thắng. Nó đại diện cho sự kiên trì, sức mạnh và khả năng vượt qua các thử thách để đạt được mục tiêu.",
            meaning: "The Chariot biểu thị sự thành công và chiến thắng qua sự kiên trì. Đây là thời điểm để bạn tập trung vào mục tiêu của mình và vượt qua mọi trở ngại.",
            reversedMeaning: "Khi bị đảo ngược, The Chariot có thể chỉ ra sự thiếu kiểm soát, sự cản trở hoặc cảm giác bị lạc lối."
        }
    ];

    useEffect(() => {
        const swiper = new window.Swiper('.swiper', {
            effect: 'cards',
            grabCursor: true,
            initialSlide: 0,
            speed: 500,
            loop: true,
            rotate: true,
            mousewheel: {
                invert: false,
            },
            on: {
                slideChange: function () {
                    setCurrentSlide(this.activeIndex);
                },
            },
        });

        return () => swiper.destroy();
    }, []);

    return (
        <div className='container'>
            <h1>Chi tiết về lá bài Tarot</h1>
            <div className='content'>
                <div className="info">
                    <h2>{slidesData[currentSlide]?.description}</h2>
                    <p><strong>Meaning:</strong> {slidesData[currentSlide]?.meaning}</p>
                    <p><strong>Reversed Meaning:</strong> {slidesData[currentSlide]?.reversedMeaning}</p>
                </div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {slidesData.map((slide, index) => (
                            <div className="swiper-slide" key={index}>
                                <img src={slide.image} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailTarot;
