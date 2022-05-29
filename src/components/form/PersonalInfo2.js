import React, { useEffect } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDContext } from "../ContextProvider";

function PersonalInfo({ formData, setFormData }) {
  const { doctorName2 } = useDContext();
  return (
    <div className="personal-info-container">
      <TextField
        id="outlined-select-currency"
        select
        label="Выберите специалиста"
        value={formData.doctor}
        onChange={(e) => {
          setFormData({ ...formData, doctor: e.target.value });
        }}
        fullWidth
      >
        {doctorName2 &&
          doctorName2.map((option) => (
            <MenuItem
              key={option.id}
              value={(option.name, option.surname, option.midName)}
            >
              {option.name} {option.surname} {option.midName}
            </MenuItem>
          ))}
      </TextField>
    </div>
  );
}

export default PersonalInfo;
