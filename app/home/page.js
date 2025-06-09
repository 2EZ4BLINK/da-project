"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useGetAllData } from "@/redux/reducer";
import { useDispatch } from "react-redux";
import {
  ADD_AGE,
  ADD_GENDER,
  ADD_NAME,
  UPDATE_ALERT,
  UPDATE_ALL,
} from "@/redux/action/actionTypes";
import { SuccessAlert } from "@/components";

const HomePage = () => {
  const dispatch = useDispatch();
  const { name, age, gender, alert } = useGetAllData();
  const [nameUpdate, setNameUpdate] = useState("");
  const [ageUpdate, setAgeUpdate] = useState("");
  const [genderUpdate, setGenderUpdate] = useState("");

  const handleUpdateIdentity = () => {
    dispatch({
      type: UPDATE_ALL,
      payload: {
        name: nameUpdate,
        age: ageUpdate,
        gender: genderUpdate,
        alert: true,
      },
    });

    setTimeout(() => {
      dispatch({ type: UPDATE_ALERT, payload: false });
    }, 3000);
  };

  return (
    <Box sx={{ mt: 2, padding: "0 20px" }}>
      {alert ? <SuccessAlert /> : null}

      <Typography>User Details</Typography>

      <Box sx={{ mb: 5 }}>
        <Typography>Name: {name}</Typography>
        <Typography>Age: {age}</Typography>
        <Typography>Gender: {gender}</Typography>
      </Box>

      <Box
        sx={{
          mb: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{ mb: 2 }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="white"
          onChange={(e) => setNameUpdate(e.target.value)}
        />
        <TextField
          sx={{ mb: 2 }}
          id="outlined-basic"
          label="age"
          variant="outlined"
          color="white"
          type="number"
          onChange={(e) => setAgeUpdate(e.target.value)}
        />
        <TextField
          sx={{ mb: 2 }}
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          color="white"
          onChange={(e) => setGenderUpdate(e.target.value)}
        />
      </Box>

      <Box>
        <Typography>Updated User Details</Typography>

        <Box sx={{ mb: 5 }}>
          <Typography>Name: {nameUpdate}</Typography>
          <Typography>Age: {ageUpdate}</Typography>
          <Typography>Gender: {genderUpdate}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={handleUpdateIdentity}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
