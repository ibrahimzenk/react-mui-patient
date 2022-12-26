import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

function LinkTab({ to, ...props }) {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <Tab component="div" style={{ fontSize: 14, textTransform: "capitalize" }} {...props} />
    </NavLink>
  );
}

function RegisterPatient() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", marginBottom: 1 }}>
        <Tabs value={value} onChange={handleChange}>
          <LinkTab label="Basic Information" to="basicinfo" />
          <LinkTab label="Address" to="address" />
          <LinkTab label="Guarantor" to="guarantor" />
          <LinkTab label="Insurance" to="insurance" />
          <LinkTab label="Kin/Emergency Contact" to="kinemergencycontact" />
          <LinkTab label={<AddAPhotoIcon />} to="profilepic" />
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" size="small" color="success" sx={{ marginRight: 3, py: 0, fontSize: 12, textTransform: "capitalize" }}>
            Register Patient
          </Button>
        </Tabs>
      </Box>

      <Outlet />
    </div>
  );
}

export default RegisterPatient;
