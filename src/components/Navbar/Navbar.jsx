import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {
  Avatar,
  Badge,
  Button,
  ButtonBase,
  IconButton,
  Input,
  InputAdornment,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, Link as Route } from "react-router-dom";
import { linkRouterCss } from "../../common/global-styles";
import logo from "../../assets/img/logo.png";
import {
  FavoriteBorderOutlined,
  NotificationsNoneOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";
import { Categories } from "./Categories/Categories";
import Favorites from "./Favorites/Favorites";
import Cart from "./Cart/Cart";

const useStyle = makeStyles({
  links: {
    "& a": {
      transitionDuration: "0.2s",
    },
    "& a:hover": {
      color: "orange !important",
    },
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: "grey.200" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Route style={{ marginRight: 20 }} to={"/"}>
            <img
              style={{ width: 130, display: "block" }}
              src={logo}
              alt="logo"
            />
          </Route>
          {/* Categories */}
          <Dropdown style={{ marginRight: 20 }}>
            <Button sx={{ textTransform: "capitalize" }} color="dark">
              Categories
            </Button>
            <Categories />
          </Dropdown>
          {/* Search */}
          <Box
            bgcolor={grey[50]}
            border={1}
            py={0.5}
            pl={1}
            pr={2}
            flexGrow={1}
            mr={2.5}
            borderRadius={16}
          >
            <Input
              disableUnderline
              placeholder="Search For Anything..."
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </Box>
          {/* Links */}

          <Stack
            direction={"row"}
            spacing={2}
            ml="auto"
            className={classes.links}
          >
            <Link style={linkRouterCss} to="/business">
              Business
            </Link>
            <Link style={linkRouterCss} to="/tech">
              Tech
            </Link>
            <Link style={linkRouterCss} to="/myleaning">
              My Learning
            </Link>
          </Stack>

          {/* Notifications */}
          <Box
            flexDirection="row"
            ml={2.5}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Dropdown>
              <IconButton color="dark">
                <FavoriteBorderOutlined />
              </IconButton>
              <Favorites />
            </Dropdown>
            <Dropdown>
              <IconButton color="dark">
                <ShoppingCartOutlined />
              </IconButton>
              <Cart />
            </Dropdown>
            <Dropdown>
              <IconButton color="dark">
                <Badge variant="dot" overlap="circular" color="primary">
                  <NotificationsNoneOutlined />
                </Badge>
              </IconButton>
              <MenuList>
                <MenuItem>Hov</MenuItem>
              </MenuList>
            </Dropdown>
            <Dropdown>
              <ButtonBase sx={{ borderRadius: "50%" }}>
                <Badge variant="dot" overlap="circular" color="primary">
                  <Avatar sx={{ bgcolor: "black", width: 32, height: 32 }} />
                </Badge>
              </ButtonBase>
              <MenuList>
                <MenuItem>Hov</MenuItem>
              </MenuList>
            </Dropdown>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
