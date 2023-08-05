import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type Prop = {
  Name: string;
  Rupees: number;
  image: any;
};
const Cards = ({ Name, Rupees, image }: Prop) => {
  return (
    <Card sx={{ display: "flex", backgroundColor: "black" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          height: 500,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Typography component="div" variant="h5">
            {Name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Rs.{Rupees}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%" }}
          image={image}
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
};

export default Cards;
