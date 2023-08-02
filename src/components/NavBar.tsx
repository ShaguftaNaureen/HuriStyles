import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import React, { useState } from "react";

type Props = {
  mode: any;
  setMode: any;
};
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#121212",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  padding: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    gap: "15px",
  },
}));

const JustShare = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const NavBar = ({ setMode, mode }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, fontFamily: "Cinzel" }}
        >
          H STYLES
        </Typography>
        <ShoppingBagIcon sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search>
          <InputBase placeholder="Search... " />
        </Search> */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <ShoppingBagIcon />
          </Badge>
          <ShareRoundedIcon onClick={(e) => setOpen(true)} />
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
        </Icons>
        <JustShare>
          <ShareRoundedIcon onClick={(e) => setOpen(true)} />
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
        </JustShare>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Whats App</MenuItem>
        <MenuItem>Insta</MenuItem>
        <MenuItem>Facebook</MenuItem>
        <MenuItem>Twitter</MenuItem>
      </Menu>
    </AppBar>
  );
};
