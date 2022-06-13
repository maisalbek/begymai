import React, { useEffect, useState } from "react";
import { useDContext } from "../ContextProvider";
import "./Form.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function OtherInfo({ formData, setFormData }) {
  const [open, setOpen] = React.useState(false);

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
      console.log(objForPush);
    }
  }, []);

  useEffect(() => {
    console.log(info);
  }, [info]);

  const handleChange = (e) => {
    let obj = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(obj);
  };
  return (
    <div className="other-info-container">
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
      <span style={{ textAlign: "start", width: "100%", marginLeft: "60px" }}>
        Время
      </span>
      <input
        type="time"
        id="appt"
        name="time"
        onChange={(e) => {
          handleChange(e);
        }}
      />
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
                  {item.date} в {item.time}
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
