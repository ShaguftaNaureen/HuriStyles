import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ display: "flex", flexDirection: "row" }}>
          <Typography component="div" variant="h5">
            Ruby
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Rs.250
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://mui.com/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
};

export default Cards;
