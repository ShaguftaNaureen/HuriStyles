import { Box, Typography } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Charles Deluvio",
  },
];

const AboutUs = () => {
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
          ABOUT US
        </Typography>
        <Box style={{ margin: "1% 20% 0 20%" }}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Cinzel, serif", textAlign: "center" }}
          >
            At our company, we are passionate about providing stylish and
            high-quality hijab products that empower women to embrace their
            individuality and express their unique sense of fashion while
            maintaining their modesty and grace.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "500",
          height: 600,
          overflowY: "hidden",
          backgroundColor: "pink",
          margin: "1% 20% 0 20%",
        }}
      >
        <ImageList
          //   sx={{
          //     width: "100%",
          //     height: "100%",
          //     overflow: "hidden",
          //     paddingTop: "50px",
          //     backgroundColor: "yellow",
          //   }}
          variant="woven"
          cols={4}
          gap={48}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                // style={{
                //   objectFit: "cover", // Make the image fit the container while maintaining aspect ratio
                //   width: "100%",
                //   height: "100%",
                // }}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default AboutUs;
