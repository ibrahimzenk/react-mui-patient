import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function LinkButton({ to, children, ...props }) {
  return (
    <NavLink to={to} style={{ textDecoration: "none", color: "black" }}>
      <Button variant="text" size="small" color="inherit" style={{ fontSize: 15, letterSpacing: 0.2, textTransform: "capitalize", padding: 8 }} {...props}>
        {children}
      </Button>
    </NavLink>
  );
}

function Patient() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "white", color: "black", marginBottom: 8 }}>
        <Toolbar>
          <NavLink to="dashboard" style={{ textDecoration: "none", color: "black" }}>
            <IconButton size="small" edge="start" color="inherit" sx={{ mr: 2 }}>
              <HomeIcon />
            </IconButton>
          </NavLink>
          <LinkButton to="searchpatient">Search Patient</LinkButton>
          <LinkButton to="registerpatient/basicinfo">Register Patient</LinkButton>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}

export default Patient;
