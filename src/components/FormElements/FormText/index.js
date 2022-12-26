import React from "react";
import TextField from "@mui/material/TextField";
import FormElements from "..";

function FormText({ label, col, ...props }) {
  return (
    <FormElements label={label} col={col}>
      <TextField label={label} size="small" {...props} />
    </FormElements>
  );
}

export default FormText;
