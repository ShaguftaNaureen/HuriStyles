import { Box } from "@mui/material";
import React from "react";

export const Footer = () => {
  //sx= {{display:{xs:"none", sm:"block"}}}
  return (
    <Box
      sx={{
        // backgroundColor: "lightGrey",
        flex: 1,
        padding: 2,
        // display: { xs: "none", sm: "block" },
      }}
    >
      Footer
    </Box>
  );
};
