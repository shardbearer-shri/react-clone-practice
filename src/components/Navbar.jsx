import React from "react";
import { Stack } from "@mui/material";
const Navbar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <li>Home</li>
      <li>About</li>
      <li>History</li>
      <li>Subscriptions</li>
    </Stack>
  );
};

export default Navbar;
