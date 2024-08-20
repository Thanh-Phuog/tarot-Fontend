import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Detailtarot from "./components/detailtarot";
import Cards from "./components/cards";
import Head from "./components/header";
import SpeedDial from "@mui/material/SpeedDial";
import ChatIcon from "@mui/icons-material/Chat";
import Box from "@mui/material/Box";

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/detailtarot" element={<Detailtarot />} />
          {/* Bạn có thể thêm các route khác ở đây */}
        </Routes>
        <Box
          sx={{
            position: "fixed" /* Thay đổi position thành fixed */,
            bottom: 16,
            right: 16,
            zIndex: 1000 /* Đảm bảo SpeedDial nằm trên các nội dung khác */,
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{
              position:
                "relative" /* Sử dụng relative để giữ vị trí bên trong Box */,
            }}
            icon={<ChatIcon />}
          />
        </Box>
      </div>
    </Router>
  );
}

export default App;
