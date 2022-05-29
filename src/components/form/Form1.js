import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import PersonalInfo2 from "./PersonalInfo2";
import OtherInfo from "./OtherInfo";
import emailjs from "emailjs-com";
import "./Form.css";
import { useDContext } from "../ContextProvider";

function Form1() {
  const { addData } = useDContext();
  const form = useRef();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    PIN: "",
    number: "",
    doctor: "",
    category: "",
    date: "",
    time: "",
  });

  const FormTitles = [
    "Вашы данные",
    "Выберите врача",
    "Выберите специалиста",
    "Выбор даты",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PersonalInfo2 formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_yonxp8k",
        "template_8c3akvh",
        formData,
        "Kttpa38xm6DSHmAqZ"
      )
      .then(
        (result) => {
          addData(formData);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page == 1
                ? "50%"
                : page == 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1 className="formtitle">{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div
          className="footer"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Назад
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Главная
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                if (
                  formData.PIN ||
                  formData.number ||
                  formData.doctor ||
                  formData.date ||
                  formData.time
                ) {
                  sendEmail(formData);
                  navigate("/");
                } else {
                  alert("Заполните поля!");
                }
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Завершить" : "След"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form1;
