import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function ProfilePic() {
  return (
    <Box component="div" sx={{ "& > :not(style)": { m: 1 } }}>
      <Button variant="contained" size="small" startIcon={<AddIcon />} sx={{ textTransform: "capitalize" }}>
        New Photo
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <img src="https://opensource-healthcare.com/themes/theme-default/images/NO_Image.png" alt="" width={180} />
    </Box>
  );
}

export default ProfilePic;
