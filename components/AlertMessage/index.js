import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const AlertMessage = () => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      User Identity Updated
    </Alert>
  );
};

export default AlertMessage;
