import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#3F3F3F",
    },
    secondary: {
      main: "#B4D013",
      light: "#BEDE0F",
    },
    // otherColor:{
    //     main:"lime"
    // },
  },
  typography: {
    fontFamily: "Cinzel, serif", // Replace "Cinzel" with the desired font family name
  },
});
