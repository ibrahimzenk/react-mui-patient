import React from "react";
import FormElements from "..";

import FormGroup from "@mui/material/FormGroup";

function FormCheckbox({ label, col, children }) {
  return (
    <FormElements label={label} col={col}>
      <FormGroup>{children}</FormGroup>
    </FormElements>
  );
}

export default FormCheckbox;
