import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  const loginFlag = localStorage.getItem("loginflag");
  return auth ? (
    <Outlet />
  ) : loginFlag ? (
    <Navigate to="/login"></Navigate>
  ) : (
    <Navigate to="/signup"></Navigate>
  );
};
export default PrivateComponent;
