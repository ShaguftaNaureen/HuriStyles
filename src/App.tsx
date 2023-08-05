import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { BodyContent } from "./components/BodyContent";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import ImageListComponent from "./components/ImageListComponent";
import AboutUs from "./components/AboutUs";
import NewCollections from "./components/NewCollections";

const App = () => {
  const [mode, setMode] = useState<any>("dark");

  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Setting mode to "dark" for the dark theme
      primary: {
        main: "#121212", // Replace with your desired dark primary color
      },
      secondary: {
        main: "#ff8a65", // Replace with your desired dark secondary color
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light", // Setting mode to "light" for the light theme
      primary: {
        main: "#B4CD29", // Replace with your desired light primary color
      },
      secondary: {
        main: "#C0E10B", // Replace with your desired light secondary color
      },
    },
  });

  const currentTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar setMode={setMode} mode={mode} />
        <Stack direction="column" spacing={2} justifyContent="space-between">
          <TopBar />
          <ImageListComponent />

          <NewCollections />

          {/* <BodyContent /> */}
          <AboutUs />
          <Footer />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
