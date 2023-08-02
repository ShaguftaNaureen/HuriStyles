import { Box, Icon } from "@mui/material";
import LightH from "../assets/LightH.jpg";
import React from "react";

export const TopBar = () => {
  return (
    <>
      <Box
        style={{
          flex: 1,
          padding: 2,
          fontSize: "130px",
          fontWeight: 200,
          display: "flex",
          alignItems: "center", // To vertically center the content
          justifyContent: "center", // To horizontally center the content
        }}
      >
        DISC
        {/* Wrapping the image inside a div with a circular mask */}
        <div
          style={{
            width: "120px", // Adjust the width and height to fit your needs
            height: "120px",
            borderRadius: "50%", // This creates a circular shape
            overflow: "hidden", // This ensures the image doesn't spill over the circular boundary
            // marginRight: "10px", // Add some spacing between the image and the text
          }}
        >
          <img
            src={LightH}
            alt="LightH"
            style={{
              width: "100%", // Ensures the image takes up the entire circular container
              height: "100%", // Ensures the image takes up the entire circular container
              objectFit: "cover", // This property ensures the image scales and crops as necessary to cover the circular container
            }}
          />
        </div>
        VER WORLDs
      </Box>

      <Box
        style={{
          flex: 1,
          padding: 2,
          fontSize: "130px",
          fontWeight: 200,
          display: "flex",
          alignItems: "center", // To vertically center the content
          justifyContent: "center", // To horizontally center the content
        }}
      >
        BEST HIJABs
      </Box>
    </>
  );
};
