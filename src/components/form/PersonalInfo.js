import React, { useEffect } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDContext } from "../ContextProvider";

function PersonalInfo({ formData, setFormData }) {
  const { getNames, getNames2, doctorName } = useDContext();
  useEffect(() => {
    getNames();
  }, []);
  useEffect(() => {
    getNames2(formData);
  }, [formData]);

  const handleChangle = (e) => {
    let obj = { ...formData, category: e.target.value };
    setFormData(obj);
    if (formData) {
      getNames2(formData);
    }
  };

  return (
    <div className="personal-info-container">
      <TextField
        id="outlined-select-currency"
        select
        label="Выберите врача"
        value={formData.category}
        onChange={(e) => {
          handleChangle(e);
        }}
        fullWidth
      >
        {doctorName &&
          doctorName.map((option) => (
            <MenuItem key={option.id} value={option.category}>
              {option.category}
            </MenuItem>
          ))}
      </TextField>
    </div>
  );
}

export default PersonalInfo;
