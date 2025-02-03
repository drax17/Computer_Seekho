import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const MainNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(45deg, #1A1A1D, #3B1C32)",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        padding: "10px 20px",
      }}
    >
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#FEFFFF",
              textDecoration: "none",
              letterSpacing: "2px",
              textTransform: "uppercase",
              transition: "all 0.4s ease",
              "&:hover": {
                color: "#6A1E55",
                transform: "scale(1.1)",
                letterSpacing: "3px",
                textShadow: "0 0 10px rgba(106, 30, 85, 0.5)",
              },
            }}
          >
            Computer Seekho
          </Typography>

          {/* Navigation Links for larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px", alignItems: "center" }}>
            {["add-enquiry", "follow-up", "table", "register", "Students"].map((route, index) => (
              <Typography
                key={index}
                component={Link}
                to={`/${route}`}
                sx={{
                  color: "#EEEEEE",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  "&:hover": { color: "#A64D79" },
                }}
              >
                {route.replace("-", " ")}
              </Typography>
            ))}
          </Box>

          {/* Menu icon for smaller screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {["add-enquiry", "follow-up", "table", "register", "Students"].map((route, index) => (
                <MenuItem key={index} component={Link} to={`/${route}`} onClick={handleMenuClose}>
                  {route.replace("-", " ")}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
