import React, { useEffect } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDContext } from "../ContextProvider";

function PersonalInfo({ formData, setFormData }) {
  const { getNames, doctorName } = useDContext();
  useEffect(() => {
    getNames();
  }, []);
  useEffect(() => {
    getNames();
  }, []);
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
        {doctorName &&
          doctorName.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </TextField>
    </div>
  );
}

export default PersonalInfo;
