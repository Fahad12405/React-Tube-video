import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  SearchFeed,
  ChannelDetails,
  VideoDetails,
} from "./components";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default App;
