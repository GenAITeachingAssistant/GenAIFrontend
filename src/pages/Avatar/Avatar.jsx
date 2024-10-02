import { useState } from "react";

import { avatars } from "constants/avatars";
import wave from "assets/svg/wave.svg";
import Button from "components/Button/Button";

function Avatar() {
  const [selectedAvatar, setSelectedAvatar] = useState("");

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
                selectedAvatar === avatar ? "border-4 border-primary-black" : ""
              } rounded-full w-[10rem] h-[10rem]`}
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
        <div className="mt-16">
          <Button
            text="Select an Avatar to Continue"
            onClick={() => console.log(selectedAvatar)}
            disabled={!selectedAvatar}
          />
        </div>
      </div>
      <img src={wave} alt="" />
    </div>
  );
}

export default Avatar;
