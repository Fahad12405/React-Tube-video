import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log("Inside Search Feed...");
  console.log(videos, searchTerm);

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
  //     console.log("Search Data");
  //     console.log(data);
  //     setVideos(data?.items);
  //   };

  //   fetchResults();
  // }, [searchTerm]);

  useEffect(() => {
    setVideos([]);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "50px" } }} />
        {<Videos videos={videos} />}
        <Box sx={{ ml: { sm: "50px" } }} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
