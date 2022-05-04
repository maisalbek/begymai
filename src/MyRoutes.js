import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Instructions from "./pages/Instructions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./components/MainLayout";
import Admin from "./pages/Admin";
import EditDoctor from "./components/admin/EditDoctor";
import Doctors from "./pages/Doctors";
import Form from "./pages/Form";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editdoctor" element={<EditDoctor />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
