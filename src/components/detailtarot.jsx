import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/detail.css'; // Your custom styles
import SpeedDial from "@mui/material/SpeedDial";
import ChatIcon from "@mui/icons-material/Chat";
import Box from "@mui/material/Box";
import Head from "./header";
import axios from 'axios';

function DetailTarot() {
    const { name } = useParams(); // Get the card name from URL
    const [cards, setCards] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/cards')
            .then(response => {
                const allCards = response.data.cards;
                const selectedCardIndex = allCards.findIndex(card => card.name === name);

                // Ensure the selected card is at the start of the list
                const sortedCards = [
                    ...allCards.filter(card => card.name === name),
                    ...allCards.filter(card => card.name !== name)
                ];

                setCards(sortedCards);
                // Set the current slide to 0, since the selected card is now the first one
                setCurrentSlide(0);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [name]);

    useEffect(() => {
        if (cards.length > 0) {
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
        }
    }, [cards]);

    if (cards.length === 0) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    return (
        <div>
            <Head />
            <div className='container body2'>
                <h1>Chi tiết về lá bài Tarot</h1>
                <div className='detail'>
                    <div className='content'>
                        <div className="info">
                            <p><strong>Meaning:</strong> {cards[currentSlide]?.meaning_up}</p>
                            <p><strong>Reversed Meaning:</strong> {cards[currentSlide]?.meaning_rev}</p>
                        </div>
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                {cards.map((card, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <img src={card.image} alt={`Slide ${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <h2>{cards[currentSlide]?.desc}</h2>
                </div>
            </div>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                }}
            >
                <a href="/">
                    <SpeedDial
                        ariaLabel="SpeedDial openIcon example"
                        sx={{
                            position: "relative",
                        }}
                        icon={<ChatIcon />}
                    />
                </a>
            </Box>
        </div>
    );
}

export default DetailTarot;
