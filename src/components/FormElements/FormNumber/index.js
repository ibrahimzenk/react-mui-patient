import React, { useState } from "react";
import FormElements from "..";

import TextField from "@mui/material/TextField";

function FormNumber({ label, col, ...props }) {
  const [data, setData] = useState(0);

  return (
    <FormElements label={label} col={col}>
      <TextField type="number" label={label} value={data} size="small" onChange={(event) => setData(event.target.value)} {...props} />
    </FormElements>
  );
}

export default FormNumber;
