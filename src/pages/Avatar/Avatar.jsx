import Button from "components/Button/button";
import { useState } from "react";

export const avatars = [
  "avataaars-1.svg",
  "avataaars-2.svg",
  "avataaars-3.svg",
  "avataaars-4.svg",
];

function Avatar() {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-[#131324] h-screen w-screen">
      <div className="text-primary-white">
        <h1>Pick an avatar as your profile picture</h1>
      </div>
      <div className="flex gap-[2rem]">
        {avatars.map((avatar, index) => {
          return (
            <div
              key={index}
              className={`border-1.5 border-transparent p-1 rounded-full flex justify-center items-center transition ease-in-out duration-500 ${
                selectedAvatar === index ? "border-2 border-primary-purple" : ""
              }`}
            >
              <img
                src={avatar}
                alt="avatar"
                onClick={() => {}}
                className="h-24 transition ease-in-out duration-500"
              />
            </div>
          );
        })}
      </div>
      <Button type="submit" innerText="Set as Profile picture" />
    </div>
  );
}

export default Avatar;
