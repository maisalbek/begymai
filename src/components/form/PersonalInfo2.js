import React, { useEffect, useState } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDContext } from "../ContextProvider";

function PersonalInfo({ formData, setFormData }) {
  const { doctorName2, idForPush } = useDContext();
  const handleChange = (e) => {
    let obj = {
      ...formData,
      doctor: e.target.value,
    };
    setFormData(obj);
  };
  return (
    <div className="personal-info-container">
      <TextField
        id="outlined-select-currency"
        select
        label="Выберите специалиста"
        value={formData.doctor}
        onChange={(e) => {
          handleChange(e);
        }}
        fullWidth
      >
        {doctorName2 &&
          doctorName2.map((option) => (
            <MenuItem
              key={option.id}
              value={option.name + " " + option.midName + " " + option.surname}
              onClick={() => {
                idForPush(option.id);
              }}
            >
              {option.name} {option.surname} {option.midName}
            </MenuItem>
          ))}
      </TextField>
    </div>
  );
}

export default PersonalInfo;
