import React from "react";
import "./Form.css";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="date"
        id="birthday"
        name="birthday"
        onChange={(e) => {
          setFormData({ ...formData, date: e.target.value });
        }}
        value={formData.date}
      />
      <input
        type="time"
        id="appt"
        name="appt"
        onChange={(e) => {
          setFormData({ ...formData, time: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;
