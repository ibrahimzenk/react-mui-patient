import React, { useState } from "react";
import FormElements from "..";

import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function FormDate({ label, col }) {
  const [value, setValue] = useState(dayjs("2000-01-01"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <FormElements label={label} col={col}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker label={label} inputFormat="MM/DD/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField size="small" sx={{ width: 223 }} {...params} />} />
      </LocalizationProvider>
    </FormElements>
  );
}

export default FormDate;
