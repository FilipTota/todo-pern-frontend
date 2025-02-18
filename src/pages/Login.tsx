import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsLoggedIn }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
    setError("");
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
    setError("");
  };

  const validateForm = () => {
    let isValid = true;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[0-9])/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must contain at least one number");
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      const requestBody = {
        email,
        password,
      };

      try {
        const userResult = await loginUser(requestBody);

        if (userResult && userResult.accessToken) {
          Cookies.set("accessToken", userResult.accessToken);
          setIsLoggedIn(true);
          navigate("/todo");
        } else {
          setError(userResult.message || "Something went wrong");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to connect to the server.");
      }
    }
  };

  const handleGoogleAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = `${
      import.meta.env.VITE_BACKEND_URL
    }/api/auth/google`;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg bg-white w-[100%] max-w-[350px]">
        <p className="text-center text-2xl mb-4">Login</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          {emailError && (
            <div className="text-sm text-red-500 mt-[-0.5em]">{emailError}</div>
          )}
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          {passwordError && (
            <div className="text-sm text-red-500 mt-[-0.5em]">
              {passwordError}
            </div>
          )}
          <div className="flex justify-center">
            <Button text="Login" type="submit" margin="0" />
            <Button text="Google" onClick={(e) => handleGoogleAuth(e)} />
          </div>
          <div className="text-sm text-red-500 text-center">{error}</div>
          <div className="flex flex-col items-center">
            Don&apos;t have an account?
            <Button
              text="Register"
              margin="0"
              width="5rem"
              padding="0.3rem"
              onClick={() => navigate("/register")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
