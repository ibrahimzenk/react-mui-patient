import React from "react";
import FormElements from "..";

import RadioGroup from "@mui/material/RadioGroup";

function FormRadio({ label, col, children, ...props }) {
  return (
    <FormElements label={label} col={col}>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" {...props}>
        {children}
      </RadioGroup>
    </FormElements>
  );
}

export default FormRadio;
