import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 

  const showData = async () => {
    // for storing data to db we can use fetch method which is inbuilt provided in JS.
    // or axios package we can use for that we need to install axios.

    let result = await fetch("http://localhost:4000/registerUser", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result) {
      alert("Registered Successfully ");
      localStorage.setItem("loginflag",true);
      navigate("/login")
    }
  };

  // const showData=async()=>{
  //    const result= await axios.post('http://localhost:6000/registerUser', {
  //         name,
  //         email,
  //         password
  //       })

  //       console.log("result : ",result)
  // }

  return (
    <div className="formgroup">
      <h2> Register your Profile </h2>
      <input
        className="formelement"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        id="name"
        type="text"
        placeholder="Enter your Name"
      ></input>
      <input
        className="formelement"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="email"
        type="text"
        placeholder="Enter your Email"
      ></input>
      <input
        className="formelement"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Enter your Password"
      ></input>
      <button
        type="button"
        className="formelement"
        id="button"
        onClick={showData}
      >
        Sign Up
      </button>
    </div>
  );
};
export default Signup;
