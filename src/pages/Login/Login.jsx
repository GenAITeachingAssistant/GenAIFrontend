import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import restClient from "restClient";
import Form from "pages/Login/Form";

import wave from "assets/svg/wave.svg";

function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "POST",
        url: "/auth/login",
        data: userData,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));

        toast.success("Logged in successfully");

        if (data.user.avatar) navigate("/dashboard");
        else navigate("/avatar");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <Form {...{ userData, setUserData, login, isLoading }} />
      <img src={wave} alt="" />
    </div>
  );
}

export default Login;
