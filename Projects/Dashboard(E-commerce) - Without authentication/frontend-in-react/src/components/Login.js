import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate=useNavigate();
    const postData=async()=>{
        let result = await fetch("http://localhost:4000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          result = await result.json();
          console.log("result ; ",result)
          
          if (result.result == null) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
          }
          else{
            alert("Incorrect email or password")
            setEmail("")
            setPassword("")
          }
    }


    return (
        <div className="formgroup">
          <h2> Login your Profile </h2>
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
            onClick={postData}
          >
            Log In
          </button>
        </div>
      );
    
}
export default Login;