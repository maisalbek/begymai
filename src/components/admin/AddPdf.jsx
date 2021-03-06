import React, { useState, useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useDContext } from "../ContextProvider";

const AddPdf = ({ currentData, handleClose3 }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { addDoctor, saveDoctor } = useDContext();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [viewPdf, setViewPdf] = useState(null);
  const [activebtn, setActivebtn] = useState(true);
  const [inpValues, setInpValues] = useState({
    name: "",
    pin: "",
    file: null,
  });

  useEffect(() => {}, []);
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          let obj = {
            ...inpValues,
            file: e.target.result,
          };
          setInpValues(obj);
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Пожалуйста, выберите действительный PDF файл");
      }
    } else {
      console.log("Выберите файл");
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleClick = () => {
    currentData.analyze.push(inpValues);
    saveDoctor(currentData);
    handleClose3();
  };

  return (
    <div className="homwcontainer">
      <form className="form-group" onSubmit={handlePdfFileSubmit}>
        <input
          type="file"
          className="form-control"
          required
          value={""}
          onChange={handlePdfFileChange}
        />
        {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
        <input
          type="text"
          placeholder="Имя пациента"
          onChange={handleChange}
          value={inpValues.name}
          name="name"
          className="inp1"
        />
        <input
          type="number"
          placeholder="Пин"
          onChange={handleChange}
          value={inpValues.pin}
          name="pin"
          className="inp1"
        />
        <br />
        <br />

        <button
          className="upload"
          onClick={handleClick}
          style={{
            width: "90px",
            height: "40px",
            backgroundColor: "black",
            color: "#c2c1be",
            cursor: "pointer",
          }}
        >
          Загрузить
        </button>
      </form>
      <br />
      <br />
      <h4>Смотреть PDF</h4>
      <div className="pdf-container">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
            ></Viewer>
          </Worker>
        )}

        {!pdfFile && <>Файл еще не выбран!</>}
      </div>
    </div>
  );
};

export default AddPdf;
