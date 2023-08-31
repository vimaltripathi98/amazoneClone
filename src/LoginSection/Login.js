import React, { useState, useEffect } from "react";
import "./Login.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import credential from "../credentials/credential.json";

function Login() {
  const initialField = {
    username: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialField);
  const [candidateName, setCandidateName] = useState("");

  const { username, password } = loginData;
  const [errors, setErrors] = useState({});

  const cookies = new Cookies();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeName = (e) => {
    setCandidateName(e.target.value);
  };
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(loginData),
      redirect: "follow",
    };
    fetch("https://fakestoreapi.com/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.token, "result");
        localStorage.setItem("name", candidateName);
        cookies.set("x-auth-token", result);
        navigate("/");
      })
      .catch((error) =>
        alert("Please fill correct UserName and Password", error)
      );
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          {/* <input
            placeholder="Please Enter Name"
            name="candidateName"
            value={candidateName}
            onChange={handleChangeName}
          /> */}
          <h5>User Name</h5>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <p>
          {" "}
          <span style={{ fontSize: "16px", fontWeight: 700 }}>
            UserName
          </span>{" "}
          <span> mor_2314</span>
          <br />
          <span style={{ fontSize: "16px", fontWeight: 700 }}>Password</span>
          <span> 83r5^_</span>
        </p>

        {/* <button className="login__registerButton">
          Create your eShop Account
        </button> */}
      </div>
    </div>
  );
}

export default Login;
