import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../components/AuthContextProvider";

const Register = () => {
  const { registerUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Регистрация"}
        btnText={"Регистрировать"}
        link={"/login"}
        linkText={"Уже есть аккаунт? Логин!"}
        handleSave={registerUser}
      />
    </div>
  );
};

export default Register;
