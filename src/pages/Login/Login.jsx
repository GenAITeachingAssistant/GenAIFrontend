import { Link } from "react-router-dom";

import Input from "components/Input/Input";
import Button from "components/Button/button";

import Logo from "assets/logo.svg";

function Login() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-primary-black">
      <div className="flex flex-col gap-8 bg-secondary-black rounded-2xl p-12 px-20">
        <div className="flex items-center gap-4 justify-center">
          <img src={Logo} alt="logo" className="h-20" />
          <h1 className="text-white uppercase">Chat App</h1>
        </div>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => {}}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => {}}
        />
        <Button type="submit" innerText="Login" />
      </div>
      <span className="text-white uppercase">
        Don't have an account ?{" "}
        <Link
          to="/signup"
          className="text-primary-purple no-underline font-bold"
        >
          Signup
        </Link>
      </span>
    </div>
  );
}

export default Login;
