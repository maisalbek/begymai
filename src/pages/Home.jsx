import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContextProvider";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser, logOutUser } = useAuth();

  return (
    <div>
      <div id="section1" className="section-1 box">
        <div className="border">
          <h1 className="hometitle">Онлайн запись на прием к врачу</h1>
          <h2 className="hometitle2">Сэкономьте свое время!</h2>
        </div>
        <Button
          className="zapis"
          onClick={() => {
            currentUser.isLogged ? navigate("/form") : navigate("/login");
          }}
          variant="contained"
        >
          Записаться к врачу
        </Button>
      </div>
      <div id="section2" className="section-2 box">
        <h1 style={{ margin: "0" }}>________</h1>
        <h1 className="kakmojno">Как можно записаться?</h1>
        {/* ---------------------------------------------------- */}
        <div
          className="threeClasses"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "0 50px 50px 50px",
          }}
        >
          <img
            width="100px"
            className="numbers"
            src="https://www.freepnglogos.com/uploads/1-number-png/black-circle-1-number-launchpad-angola-pricing-shared-office-space-luanda-29.png"
            alt=""
          />
          <div>
            <p className="cherez">Через сайт https://begymai.vercel.app</p>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div
          className="threeClasses"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 50px 50px 50px",
          }}
        >
          <img
            className="numbers"
            width="80px"
            src="http://cdn.onlinewebfonts.com/svg/img_2206.png"
            alt=""
          />
          <div>
            <p className="cherez" style={{ paddingLeft: "5px" }}>
              По мобильному телефону
            </p>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div
          className="threeClasses"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: "0 50px 50px 50px",
          }}
        >
          <img
            className="numbers"
            width="100px"
            src="https://icon-library.com/images/3-icon/3-icon-8.jpg"
            alt=""
          />
          <div>
            <p className="cherez">Через регистратуру</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p style={{ fontSize: "17px" }}>Бегимай</p>
        <p style={{ fontSize: "15px" }}>18.04.2022</p>
        <p style={{ fontSize: "14px" }}>+996(705) 819 944 +996(508) 819 944</p>
      </div>
    </div>
  );
};

export default Home;
