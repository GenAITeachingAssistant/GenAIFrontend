import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import restClient from "restClient";
import Form from "pages/Signup/Form";

import wave from "assets/svg/wave.svg";

function Signup() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const signup = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "POST",
        url: "/auth/signup",
        data: userData,
      });

      if (data.status) {
        toast.success("Logged in successfully");

        navigate("/login");
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
      <Form {...{ userData, setUserData, signup, isLoading }} />
      <img src={wave} alt="" />
    </div>
  );
}

export default Signup;
