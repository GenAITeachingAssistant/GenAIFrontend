import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "components/Button/Button";
import restClient from "restClient";

import { avatars } from "constants/avatars";
import wave from "assets/svg/wave.svg";

function Avatar() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const id = userData._id;
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setAvatar = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "POST",
        url: `/auth/setAvatar/${id}`,
        data: { avatar: selectedAvatar },
      });

      if (data.success) {
        localStorage.setItem("userData", JSON.stringify(data.userData));

        toast.success("Avatar set successfully");

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div className="flex flex-col justify-center items-center pt-[2rem] gap-8">
        <p className="text-secondary-black font-semibold text-[4.4rem]">
          Pick an Avatar{" "}
        </p>
        <div className="flex gap-8">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt=""
              className={`cursor-pointer ${
                selectedAvatar === `avatar${index + 1}`
                  ? "border-4 border-primary-black"
                  : ""
              } rounded-full w-[10rem] h-[10rem]`}
              onClick={() => setSelectedAvatar(`avatar${index + 1}`)}
            />
          ))}
        </div>
        <div className="mt-16">
          <Button
            text="Select an Avatar to Continue"
            onClick={setAvatar}
            disabled={isLoading || !selectedAvatar}
            isLoading={isLoading}
          />
        </div>
      </div>
      <img src={wave} alt="" />
    </div>
  );
}

export default Avatar;
