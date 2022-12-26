import React, { useState } from "react";
import FormElements from "..";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function FormSelect({ label, col }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormElements label={label} col={col}>
      <FormControl sx={{ minWidth: 223 }} size="small">
        <InputLabel id="demo-select-small">{label}</InputLabel>
        <Select labelId="demo-select-small" id="demo-select-small" value={age} label={label} onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Item1</MenuItem>
          <MenuItem value={20}>Item2</MenuItem>
          <MenuItem value={30}>Item3</MenuItem>
        </Select>
      </FormControl>
    </FormElements>
  );
}

export default FormSelect;
