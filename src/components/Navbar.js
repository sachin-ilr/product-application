import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.products.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <IconButton edge="start" color="inherit" aria-label="home">
              <HomeIcon />
            </IconButton>
            Scam Store
          </Link>
        </Typography>
        <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
          <IconButton color="inherit">
            <InfoIcon />
          </IconButton>
        </Link>
        <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
          <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
