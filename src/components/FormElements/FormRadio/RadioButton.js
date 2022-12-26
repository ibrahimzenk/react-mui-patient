import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

function RadioButton({ label, ...props }) {
  return <FormControlLabel label={label} control={<Radio size="small" {...props} />} />;
}

export default RadioButton;
