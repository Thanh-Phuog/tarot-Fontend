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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class Cards extends React.Component {
  state = {
    cards: [], // Initialize with an empty array
  };

  componentDidMount() {
    axios
      .get("https://tarotapi.dev/api/v1/cards")
      .then((res) => {
        // Assuming the API returns the structure with `cards`
        this.setState({ cards: res.data.cards });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Head />
        <div className="container">
          <div className="content">
            <Box sx={{ width: "90%" }}>
              <h2>Tarot Cards</h2>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {this.state.cards.map((card, index) => (
                  <Grid item xs={3} key={index}>
                    <a href="/detail">
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
      </div>
    );
  }
}
