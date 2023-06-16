import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";
import Background from './Background'

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      
      
      <FormContainer>  
        <Background />
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Chatter Box</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
      
    </>
  );
}

const FormContainer = styled.div`
  .bg{
    z-index: -100;
  }
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  gap: 1rem;
  align-items: center;


  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    position: relative;
    background: linear-gradient(
        277deg,
        rgba(213, 213, 213, 0.1) 0%,
        rgba(213, 213, 213, 0.02) 50%,
        rgba(42, 42, 42, 0.02) 50%,
        rgba(42, 42, 42, 0.2) 100%
      ),
      linear-gradient(
        295deg,
        rgba(73, 73, 73, 0.3) 0%,
        rgba(73, 73, 73, 0.1) 50%,
        rgba(229, 229, 229, 0.1) 50%,
        rgba(229, 229, 229, 0.03) 100%
      ),
      linear-gradient(
        145deg,
        rgba(77, 77, 77, 0.1) 0%,
        rgba(77, 77, 77, 0.1) 50%,
        rgba(123, 123, 123, 0.1) 50%,
        rgba(123, 123, 123, 0.1) 100%
      ),
      linear-gradient(
        54deg,
        rgba(51, 51, 51, 0.3) 0%,
        rgba(51, 51, 51, 0.1) 50%,
        rgba(29, 29, 29, 0.2) 50%,
        rgba(29, 29, 29, 0.03) 100%
      ),
      linear-gradient(
        170deg,
        rgba(9, 9, 9, 0.02) 0%,
        rgba(9, 9, 9, 0.02) 50%,
        rgba(243, 243, 243, 0.02) 50%,
        rgba(243, 243, 243, 0.02) 100%
      ),
      linear-gradient(
        264deg,
        rgba(214, 214, 214, 0.01) 0%,
        rgba(214, 214, 214, 0.01) 50%,
        rgba(153, 153, 153, 0.01) 50%,
        rgba(153, 153, 153, 0.01) 100%
      ),
      linear-gradient(90deg, rgb(99, 48, 222), rgb(76, 212, 233));
    padding: 1em 1.5em;
    border: 1px solid black;
    border-radius: 25px 7px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.7s ease;
    &:after {
      position: absolute;
      top: 20%;
      left: 50%;
      background: linear-gradient(
        45deg,
        rgb(46, 94, 149),
        rgb(59, 131, 209),
        rgb(67, 91, 142)
      );
      width: 150px;
      height: 30px;
      content: "";
      transform: translate(-50%);
      border-radius: 25px 7px;
      filter: blur(20px);
      z-index: -1;
    }
    &:hover {
      border-radius: 7px 25px;
      background: linear-gradient(
        45deg,
        rgb(239, 7, 129) 0%,
        rgb(239, 7, 129) 6%,
        rgb(208, 10, 112) 6%,
        rgb(208, 10, 112) 25%,
        rgb(177, 13, 96) 25%,
        rgb(177, 13, 96) 40%,
        rgb(147, 16, 79) 40%,
        rgb(147, 16, 79) 45%,
        rgb(116, 19, 62) 45%,
        rgb(116, 19, 62) 53%,
        rgb(85, 22, 46) 53%,
        rgb(85, 22, 46) 66%,
        rgb(54, 25, 29) 66%,
        rgb(54, 25, 29) 100%
      );
      letter-spacing: 0.2em;
      border: 1px solid white;
    }
  }
  span {
    color: white;
    text-transform: uppercase;

    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
      letter-spacing: 0.01em;
    }
  }
`;