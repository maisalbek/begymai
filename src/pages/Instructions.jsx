import React from "react";
import "./Instructions.css";

const Instructions = () => {
  return (
    <div className="cont">
      <div className="blocks one">
        <div className="step1">
          <p id="step1">Шаг 1.</p>
          <div className="innerone">
            <p>- Войти на портал registratura.med.kg</p>
            <p>- Ввести ПИН</p>
            <p>- Ввести номер телефона</p>
          </div>
        </div>
      </div>
      <div className="blocks two">
        <div className="step2">
          <p id="step1">Шаг 2.</p>
          <div className="innerone">
            <p>- Выберите врача</p>
          </div>
        </div>
      </div>
      <div className="blocks three ">
        <div className="step3">
          <p id="step1">Шаг 3.</p>
          <div className="innerone">
            <p>- Выберите дату и время</p>
            <p>- Нажмите на кнопку</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
