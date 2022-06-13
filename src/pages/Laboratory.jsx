import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddPdf from "../components/admin/AddPdf";
import "./Laboratory.css";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { useDContext } from "../components/ContextProvider";

import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Laboratory = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const { getAnalyze, analyze } = useDContext();
  const [toggle, setToggle] = useState(false);
  const [file, setFile] = useState();
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getAnalyze();
  }, []);

  return (
    <div className="lab">
      <button
        style={{
          width: "90px",
          height: "40px",
          backgroundColor: "black",
          color: "#c2c1be",
          margin: "10px",
        }}
        onClick={handleToggle}
      >
        {toggle ? "Назад" : "Добавить"}
      </button>
      {toggle ? (
        <AddPdf />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              backgroundColor: "rgb(134, 137, 119)",
              padding: "8px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <span>Врач</span>
            <span style={{ marginLeft: "10px" }}>Пациент</span>
            <span style={{ marginLeft: "20px" }}>PIN</span>
            <span style={{ marginLeft: "20px" }}>Файл</span>
          </div>
          {analyze && analyze.length > 0
            ? analyze.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: "60%",
                      backgroundColor: "rgb(154, 137, 112)",
                      padding: "8px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <span>{item.doctorName}</span>
                    <span style={{ marginLeft: "10px" }}>{item.name}</span>
                    <span style={{ marginLeft: "10px" }}>{item.pin}</span>
                    <span style={{ marginLeft: "20px" }}>
                      <FolderCopyIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleClickOpen();
                          setFile(item.file);
                        }}
                      />
                    </span>
                  </div>
                );
              })
            : null}
        </div>
      )}

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
          {file && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
              <Viewer
                fileUrl={file}
                plugins={[defaultLayoutPluginInstance]}
              ></Viewer>
            </Worker>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default Laboratory;
