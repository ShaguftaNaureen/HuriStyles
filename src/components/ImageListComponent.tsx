import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BlueH from "../assets/BlueH.jpg";
import GreenH from "../assets/GreenH.jpg";
import BrownH from "../assets/BrownH.jpg";
import MaroonH from "../assets/MaroonH.jpg";
import RedH from "../assets/RedH.jpg";
import GreyH from "../assets/GreyH.jpg";

export default function ImageListComponent() {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: 450,
        overflow: "hidden",
        paddingTop: "50px",
      }}
      variant="woven"
      cols={4}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            alt={item.title}
            style={{
              objectFit: "cover", // Make the image fit the container while maintaining aspect ratio
              width: "100%",
              height: "100%",
            }}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: GreyH,
    title: "Grey",
  },
  {
    img: BrownH,
    title: "Brown",
  },

  {
    img: GreenH,
    title: "Green",
  },
  // {
  //   img: RedH,
  //   title: "Red",
  // },
  {
    img: BlueH,
    title: "Blue",
  },
];
