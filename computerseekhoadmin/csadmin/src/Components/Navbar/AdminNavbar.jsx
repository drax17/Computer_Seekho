import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Menu, MenuItem, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const MainNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #1A1A1D, #3B1C32)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        padding: "8px 16px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#A64D79",
                transform: "scale(1.05)",
                textShadow: "0 0 12px rgba(166, 77, 121, 0.6)",
              },
            }}
          >
            Computer Seekho
          </Typography>

          {/* Navigation Links for larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "24px", alignItems: "center" }}>
            {["add-enquiry", "follow-up", "table", "register", "Students"].map((route, index) => (
              <Typography
                key={index}
                component={Link}
                to={`/${route}`}
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  transition: "all 0.3s",
                  "&:hover": { background: "rgba(166, 77, 121, 0.3)", color: "#A64D79" },
                }}
              >
                {route.replace("-", " ")}
              </Typography>
            ))}
            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{
                background: "#6A1E55",
                color: "#FFFFFF",
                fontWeight: "bold",
                "&:hover": {
                  background: "#A64D79",
                },
              }}
            >
              Logout
            </Button>
          </Box>

          {/* Menu icon for smaller screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: "#A64D79" }} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {["add-enquiry", "follow-up", "table", "register", "Students"].map((route, index) => (
                <MenuItem key={index} component={Link} to={`/${route}`} onClick={handleMenuClose}>
                  {route.replace("-", " ")}
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
