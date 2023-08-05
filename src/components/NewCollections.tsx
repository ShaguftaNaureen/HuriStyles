import { Box, Typography } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import PinkH from "../assets/PinkH.jpeg";

const NewCollections = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Typography variant="h3" style={{ fontFamily: "Cinzel, serif" }}>
          NEW COLLECTIONS
        </Typography>
        <Box>
          <Cards Name={"Ruby"} Rupees={199} image={PinkH} />
        </Box>
      </Box>
    </>
  );
};

export default NewCollections;
