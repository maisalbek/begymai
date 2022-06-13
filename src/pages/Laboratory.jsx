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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
            style={{ padding: "0 10px", marginLeft: "20px", overflow: "auto" }}
          >
            <TableContainer
              style={{ backgroundColor: "rgb(154, 137, 112)" }}
              component={Paper}
            >
              <Table sx={{ minWidth: 320 }} aria-label="simple table">
                <TableHead
                  style={{ backgroundColor: "rgba(71, 57, 36, 0.73)" }}
                >
                  <TableRow>
                    <TableCell width="20%">Врач</TableCell>
                    <TableCell width="20%">Пациент</TableCell>
                    <TableCell width="20%">PIN</TableCell>
                    <TableCell width="20%">Файл</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {analyze && analyze.length > 0
                    ? analyze.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell width="20%">{item.doctorName}</TableCell>
                          <TableCell width="20%">{item.name}</TableCell>
                          <TableCell width="20%">{item.pin}</TableCell>
                          <TableCell width="20%">
                            <FolderCopyIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleClickOpen();
                                setFile(item.file);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
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
