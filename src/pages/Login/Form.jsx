import { useNavigate } from "react-router-dom";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import illustrion from "assets/svg/login.svg";

function Form({ userData, setUserData, login, isLoading }) {
  const navigate = useNavigate();

  return (
    <div className="flex grow items-center px-[2rem] gap-[2rem] justify-between">
      <div className="flex flex-col gap-[1rem]">
        <span className="font-bold text-[4.4rem]">
          <span className="text-secondary-teal">Teaching Assistant</span>
        </span>

        <div className="flex flex-col gap-[1rem] w-[90%]">
          <Input
            type="email"
            required={true}
            placeholder="Email ID"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Input
            type="password"
            required={true}
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <Button
            type="submit"
            onClick={login}
            disabled={isLoading}
            text={"Login"}
            icon={true}
            isLoading={isLoading}
          />
        </div>
        <p>
          Don't have an account?{" "}
          <span
            className="text-primary-teal cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Signup
          </span>
        </p>
      </div>
      <div className="w-[50%]">
        <img src={illustrion} alt="img" className="h-[80%] " />
      </div>
    </div>
  );
}

export default Form;
