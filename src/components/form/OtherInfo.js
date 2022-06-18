import React, { useEffect, useState } from "react";
import { useDContext } from "../ContextProvider";
import "./Form.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem, TextField } from "@mui/material";

function OtherInfo({ formData, setFormData }) {
  const [open, setOpen] = React.useState(false);
  const [array, setArray] = useState([]);
  const [busytime, setBusyTime] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { objForPush } = useDContext();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (objForPush) {
      setInfo(objForPush.busy);
    }
  }, []);

  useEffect(() => {
    let arr = [];
    for (let i = objForPush.start; i <= objForPush.end; i++) {
      arr.push(i);
    }
    setArray(arr);
    let a = [];
    objForPush.busy.forEach((item) => {
      a.push(item.time);
    });
    setBusyTime(a);
  }, []);

  const handleChange = (e) => {
    let obj = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(obj);
  };
  return (
    <div className="other-info-container">
      <span>График работы: </span>
      <span>{objForPush.start + ":00-" + objForPush.end + ":00"}</span>
      <span
        style={{
          textAlign: "center",
          width: "100%",
          cursor: "pointer",
          color: "blue",
        }}
        onClick={handleClickOpen}
      >
        Посмотреть свободное время доктора
      </span>
      <span style={{ textAlign: "start", width: "100%", marginLeft: "60px" }}>
        Дата
      </span>
      <input
        type="date"
        id="birthday"
        name="date"
        onChange={(e) => {
          handleChange(e);
        }}
        value={formData.date}
      />
      {/* <span style={{ textAlign: "start", width: "100%", marginLeft: "60px" }}>
        Время
      </span> */}
      {/* <input
        type="time"
        id="appt"
        name="time"
        onChange={(e) => {
          handleChange(e);
        }}
      /> */}
      <TextField
        id="outlined-select-currency"
        select
        label="Выберите время"
        value={formData.time}
        sx={{ marginTop: "20px", width: "93%" }}
        name="time"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {array &&
          array.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{ color: busytime.includes(option) ? "red" : "black" }}
            >
              {option + ":00"}
            </MenuItem>
          ))}
      </TextField>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {info && info?.length > 0 ? (
          <DialogTitle id="alert-dialog-title">
            {"Доктор занят в: "}
          </DialogTitle>
        ) : null}
        <DialogContent>
          {info && info?.length > 0 ? (
            info?.map((item) => {
              return (
                <DialogContentText id="alert-dialog-description">
                  {item.date} в {item.time + ":00"}
                </DialogContentText>
              );
            })
          ) : (
            <DialogContentText id="alert-dialog-description">
              Доктор свободен
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Понятно</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OtherInfo;
