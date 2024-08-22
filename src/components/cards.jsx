import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./styles/detail.css";
import Head from "./header";
import SpeedDial from "@mui/material/SpeedDial";
import ChatIcon from "@mui/icons-material/Chat";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class Cards extends React.Component {
  state = {
    cards: [],
    allCards: [],
    selectedSuits: [],
    searchQuery: ""
  };

  componentDidMount() {
    this.fetchAllCards();
  }

  fetchAllCards = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/cards");
      this.setState({ cards: response.data.cards, allCards: response.data.cards });
    } catch (error) {
      console.log(error);
    }
  };

  handleCheckboxChange = (event) => {
    const suit = event.target.id;
    const { selectedSuits } = this.state;

    if (event.target.checked) {
      this.setState(
        { selectedSuits: [...selectedSuits, suit] },
        () => this.updateCards()
      );
    } else {
      this.setState(
        { selectedSuits: selectedSuits.filter(item => item !== suit) },
        () => this.updateCards()
      );
    }
  };

  updateCards = async () => {
    const { selectedSuits, searchQuery, allCards } = this.state;

    let filteredCards = allCards;

    if (selectedSuits.length > 0) {
      try {
        const combinedCards = [];
        for (const suit of selectedSuits) {
          const response = await axios.get(`http://localhost:8000/api/v1/cards/suits/${suit}`);
          combinedCards.push(...response.data.cards);
        }
        filteredCards = combinedCards;
      } catch (error) {
        console.log("Suit Filter Error:", error);
      }
    }

    if (searchQuery) {
      filteredCards = filteredCards.filter(card =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    this.setState({ cards: filteredCards });
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = () => {
    this.updateCards();
  };

  render() {
    return (
      <div>
        <Head />
        <div className="container">
          <div className="left">
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                value={this.state.searchQuery}
                onChange={this.handleSearchChange}
              />
              <button onClick={this.handleSearch}>
                <SearchIcon />
              </button>
            </div>

            <div className="arr">
              <p>Suits</p>
              <hr style={{ width: "70%", opacity: "0.5" }} />
              <div className="checkbox">
                <div>
                  <input
                    type="checkbox"
                    id="wands"
                    name="wands"
                    value="wands"
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="wands">Wands</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="cups"
                    name="cups"
                    value="cups"
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="cups">Cups</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="swords"
                    name="swords"
                    value="swords"
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="swords">Swords</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="pentacles"
                    name="pentacles"
                    value="pentacles"
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="pentacles">Pentacles</label>
                </div>
              </div>
            </div>
          </div>
          <div className="detail" style={{ width: "750px",  border: "2px solid #561B6B",  backgroundColor: "rgba(38, 24, 45, 0.6)",   borderRadius: "20px",
            backdropFilter: "blur(30px)"}}>
            <div className="content">
              <Box sx={{ width: "90%" }}>
                <h2>Tarot Cards</h2>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {this.state.cards.map((card, index) => (
                    <Grid item xs={4} key={index}>
                      <a href={`/card/detail/${encodeURIComponent(card.name)}`}>
                        <img src={card.image} alt={card.name} />
                        <div className="card-description">
                          <p>{card.name}</p>
                        </div>
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Box>
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
                className="custom-speed-dial" // Add the custom class
                icon={<ChatIcon />}
              />
            </a>
          </Box>

        </div>
      </div>
    );
  }
}
