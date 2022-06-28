import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddPdf from "../components/admin/AddPdf";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../components/consts/Consts";
import "./Room.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Transition2 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Transition3 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Room = () => {
  const { prodId } = useParams();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    axios.get(`${API}/${prodId}`).then((res) => {
      setCurrentData(res.data);
    });
  }, []);
  const [file, setFile] = useState();

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  return (
    <div style={{ margin: "30px 40px", display: "flex", flexDirection: "row" }}>
      <div className="leftCont">
        <div className="imgCont">
          <img src={currentData.photo} alt="" className="photo" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: "#f5ebd7", marginBottom: "12px" }}>
              <span style={{ color: "black" }}>Имя: </span> {currentData.name}
            </span>
            <span style={{ color: "#f5ebd7", marginBottom: "12px" }}>
              <span style={{ color: "black" }}>Фамилия: </span>{" "}
              {currentData.surname}
            </span>
            <span style={{ color: "#f5ebd7", marginBottom: "12px" }}>
              <span style={{ color: "black" }}>Отечество: </span>{" "}
              {currentData.midName}
            </span>
            <span style={{ color: "#f5ebd7", marginBottom: "12px" }}>
              <span style={{ color: "black" }}>Тел: </span> {currentData.phone}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "70px",
            }}
          >
            <span style={{ fontSize: "25px" }}>Кабинет №</span>
            <span style={{ fontSize: "37px" }}>{currentData.id}</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="graphic">
            <span style={{ fontSize: "20px", marginBottom: "15px" }}>
              График работы:{" "}
            </span>
            <span style={{ letterSpacing: "2px" }}>{currentData.start}:00</span>
            <span style={{ letterSpacing: "2px" }}>{currentData.end}:00</span>
          </div>
          <div className="zapisalis">
            <span>Записались:</span>
            <span>{currentData.data && currentData.data.length}</span>
          </div>
          <div className="cat">
            <span>Специальность:</span>
            <span>{currentData.category}</span>
          </div>
        </div>
      </div>
      <div className="rightCont">
        <div style={{ display: "flex" }}>
          <div className="priem">
            <span>Приемы: </span>
            <span>{currentData.data && currentData.data.length}</span>
          </div>
          <div className="priem1" onClick={handleClickOpen}>
            <span>Анализы: </span>
            <span>{currentData.analyze && currentData.analyze.length}</span>
          </div>
          <div className="docs" onClick={handleClickOpen3}>
            <span>Добавить анализ</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            maxHeight: "260px",
            overflow: "auto",
          }}
        >
          {currentData.data &&
            currentData.data.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    backgroundColor: "#7b959b",
                    padding: "10px",
                    width: "95%",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.405",
                  }}
                >
                  <span style={{ marginRight: "7px" }}>
                    <span className="items1"> Имя: </span>
                    {item.name}
                  </span>
                  <span style={{ marginRight: "7px" }}>
                    <span className="items1"> Пин: </span>
                    {item.PIN}
                  </span>
                  <span style={{ marginRight: "7px" }}>
                    <span className="items1"> Тел: </span>
                    {item.number}
                  </span>
                  <span style={{ marginRight: "7px" }}>
                    <span className="items1"> Дата: </span>
                    {item.date}
                  </span>
                  <span style={{ marginRight: "7px" }}>
                    <span className="items1"> Время: </span> {item.time}
                    :00
                  </span>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "gray",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "15px 20px",
                  margin: "10px",
                  textAlign: "center",
                  width: "40%",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <span>Пациент</span>
                <span>ПИН</span>
                <span style={{ textAlign: "center", marginTop: "10px" }}>
                  Файл
                </span>
              </div>
            </div>
            {currentData.analyze && currentData.analyze.length > 0 ? (
              currentData.analyze.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "gray",
                      padding: "10px 20px",
                      margin: "10px",
                      textAlign: "center",
                      width: "40%",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <span>{item.name}</span>
                    <span>{item.pin}</span>
                    <span style={{ textAlign: "center", marginTop: "10px" }}>
                      <FolderCopyIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleClickOpen2();
                          setFile(item.file);
                        }}
                      />
                    </span>
                  </div>
                );
              })
            ) : (
              <h1>Ничего не найдено</h1>
            )}
          </div>
        </Dialog>
      </div>
      <Dialog
        fullScreen
        open={open2}
        onClose={handleClose2}
        TransitionComponent={Transition2}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose2}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {file && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer
              fileUrl={file}
              plugins={[defaultLayoutPluginInstance]}
            ></Viewer>
          </Worker>
        )}
      </Dialog>
      <Dialog
        fullScreen
        open={open3}
        onClose={handleClose3}
        TransitionComponent={Transition3}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose3}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <AddPdf currentData={currentData} handleClose3={handleClose3} />
      </Dialog>
    </div>
  );
};

export default Room;
