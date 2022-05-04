import React, { useState } from "react";
import AddDoctor from "../components/admin/AddDoctor";
import AdminDoctors from "../components/admin/AdminDoctors";
import "./Admin.css";

const Admin = () => {
  const [addModal, setAddModal] = useState(false);
  function toggle() {
    addModal ? setAddModal(false) : setAddModal(true);
  }
  return (
    <div
      className="doctorscont"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "320px", padding: "10px 0" }}>
        <img
          width="80px"
          onClick={() => toggle()}
          src="https://www.picng.com/upload/plus/png_plus_52143.png"
          alt=""
        />
        {addModal ? <AddDoctor /> : null}
      </div>
      <AdminDoctors />
    </div>
  );
};

export default Admin;
