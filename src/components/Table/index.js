import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import users from "../../data/users";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Btn from "../Btn";

const columns = [
  { field: "hospital_number", headerName: "Hospital Number", width: 150 },
  { field: "name", headerName: "Patient Name", width: 150 },
  {
    field: "age_gender",
    headerName: "Age / Gender",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
    valueGetter: (params) => `${params.row.age || ""} / ${params.row.gender || ""}`,
  },
  { field: "address", headerName: "Address", width: 180 },
  { field: "phone", headerName: "Phone", width: 130 },
  {
    field: "actions",
    headerName: "Actions",
    width: 250,
    renderCell: (cellValues) => {
      return (
        <Stack spacing={0.5} direction="row">
          <Btn
            onClick={() => {
              console.log(cellValues.row);
            }}
          >
            Edit
          </Btn>
          <Btn
            onClick={() => {
              console.log(cellValues.row);
            }}
          >
            History
          </Btn>
          <Btn
            onClick={() => {
              console.log(cellValues.row);
            }}
          >
            More <ExpandMoreIcon />
          </Btn>
        </Stack>
      );
    },
  },
];

function Table() {
  const [search, setSearch] = useState("");

  const dataarr = users.map((user) => [user.id, user.hospital_number, user.name, user.age, user.gender, user.address, user.phone]);

  const filteredData = dataarr.filter((items) => items.some((item) => item.toString().toLocaleLowerCase().includes(search)));

  const dataobj = filteredData.map((item) => ({ id: item[0], hospital_number: item[1], name: item[2], age: item[3], gender: item[4], address: item[5], phone: item[6] }));

  return (
    <>
      <Box component="div" sx={{ "& .MuiTextField-root": { m: 1, width: "30%" } }}>
        <TextField id="outlined-search" label="Search" type="search" size="small" value={search} onChange={(e) => setSearch(e.target.value)} />
      </Box>
      <div style={{ height: 750, width: "100%" }}>
        <DataGrid rows={dataobj} columns={columns} pageSize={12} rowsPerPageOptions={[12]} />
      </div>
    </>
  );
}

export default Table;
