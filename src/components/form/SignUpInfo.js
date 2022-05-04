import React from "react";
import "./Form.css";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={(event) => {
          if (event.target.value.length == 11) return false;
          setFormData({ ...formData, name: event.target.value });
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "90%",
        }}
      >
        <p style={{ fontSize: "13px", margin: "0 10px 0 0", padding: "0" }}>
          ПИН*
        </p>
        <p style={{ fontSize: "10px", margin: "0", padding: "0" }}>
          Персональный идентификационный номер из 14 символов на паспорте
        </p>
      </div>
      <input
        maxLength="5"
        type="number"
        placeholder="Введите ПИН"
        value={formData.PIN}
        onChange={(event) => {
          if (event.target.value.length == 15) return false;
          setFormData({ ...formData, PIN: event.target.value });
        }}
      />
      <div
        style={{ display: "flex", justifyContent: "flex-start", width: "90%" }}
      >
        <p style={{ fontSize: "15px", margin: "0 10px 0 0", padding: "0" }}>
          Номер телефона*
        </p>
      </div>
      <input
        type="number"
        placeholder="0999332102"
        value={formData.number}
        onChange={(event) => {
          if (event.target.value.length == 11) return false;
          setFormData({ ...formData, number: event.target.value });
        }}
      />
    </div>
  );
}

export default SignUpInfo;
