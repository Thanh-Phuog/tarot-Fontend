import React, { useEffect } from "react";
import "./styles/detail.css"; // Your custom styles

function DetailTarot(props) {
  useEffect(() => {
    // Khởi tạo Swiper từ window
    const swiper = new window.Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
    });

    // Clean up Swiper instance khi component bị unmount
    return () => swiper.destroy();
  }, []);

  return (
    <div>
      <h1>Chi tiết về lá bài Tarot</h1>
      <div className="content">
        <div className="info">
          <p>
            Info la bai
            esrftgyuiopoiuytfrftgyhujkl;'lkjhgfdfghjkl;';oiuygtfrdtyuiop[]poiuy
          </p>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://tarot.com.vn/storage/app/media/The-Fool/The-fool-xuoi.jpg"
                alt="The Fool"
              />
            </div>
            <div className="swiper-slide">
              <img
                className="img-position"
                src="https://tarot.com.vn/storage/app/media/The-Magician/The-magician-xuoi.jpg"
                alt="The Magician"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://tarot.com.vn/storage/app/media/The-High-Priestess/The-high-priestess-xuoi.jpg"
                alt="The High Priestess"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://tarot.com.vn/storage/app/media/The-Emperor/The-Emperor-xuoi.jpg"
                alt="The Emperor"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://tarot.com.vn/storage/app/media/The-Empress/The-Empress-xuoi.jpg"
                alt="The Empress"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://tarot.com.vn/storage/app/media/The-Lovers/The-lovers-xuoi.jpg"
                alt="The Lovers"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://tarot.com.vn/storage/app/media/The-Chariot/The-Chariot-xuoi.jpg"
                alt="The Chariot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTarot;
