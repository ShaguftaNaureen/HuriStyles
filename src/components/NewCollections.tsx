import { Box, Typography } from "@mui/material";
import React from "react";

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
        {/* <Box style={{ margin: "1% 20% 0 20%" }}>
        <Typography
          variant="h6"
          style={{ fontFamily: "Cinzel, serif", textAlign: "center" }}
        >
          At our company, we are passionate about providing stylish and
          high-quality hijab products that empower women to embrace their
          individuality and express their unique sense of fashion while
          maintaining their modesty and grace.
        </Typography>
      </Box> */}
      </Box>
    </>
  );
};

export default NewCollections;
