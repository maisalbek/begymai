import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../components/AuthContextProvider";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Войдите чтобы записаться"}
        btnText={"Логин"}
        link={"/register"}
        linkText={"Нету ещё аккаунта? Зарегистрируйтесь! "}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;
