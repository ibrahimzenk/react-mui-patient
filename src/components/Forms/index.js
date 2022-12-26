import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Forms({ children }) {
  return (
    <Box component="form" sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
      <Grid container spacing={1}>
        {children}
      </Grid>
    </Box>
  );
}

export default Forms;
