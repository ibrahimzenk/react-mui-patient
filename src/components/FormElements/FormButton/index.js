import React from "react";

import Button from "@mui/material/Button";
import FormElements from "..";

function FormButton({ col, children, ...props }) {
  return (
    <FormElements col={col}>
      <Button variant="contained" size="small" sx={{ textTransform: "capitalize" }} {...props}>
        {children}
      </Button>
    </FormElements>
  );
}

export default FormButton;
