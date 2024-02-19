import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log("Inside Videos Component", videos);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="space-evenly"
      alignItems="start"
      gap={2}
      margin="auto"
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
