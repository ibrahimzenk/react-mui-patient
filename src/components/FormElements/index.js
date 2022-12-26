import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FormElements({ label, col = 6, children, ...props }) {
  return (
    <Grid item xs={12} sm={col}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={3} sm={4}>
          <Typography variant="body1" component="label">
            {label}
          </Typography>
        </Grid>

        <Grid item xs={9} sm={8} {...props}>
          {children}
        </Grid>
      </Box>
    </Grid>
  );
}

export default FormElements;
