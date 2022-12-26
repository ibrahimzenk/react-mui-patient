import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Btn({ children, ...props }) {
  return (
    <Stack spacing={1} direction="row">
      <Button variant="contained" size="small" style={{ borderRadius: 15, fontSize: 11 }} {...props}>
        {children}
      </Button>
    </Stack>
  );
}

export default Btn;
