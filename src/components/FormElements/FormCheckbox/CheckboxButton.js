import React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function CheckboxButton({ label, ...props }) {
  return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
}

export default CheckboxButton;
