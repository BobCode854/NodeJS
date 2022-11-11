import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import PrivateComponent from "./PrivateComponent";
import Login from "./Login";
import AddProduct from "./AddProducts";
import Products from "./Products"
import UpdateProduct from "./UpdateProduct";
const Header = () => {
  let auth = localStorage.getItem("user");
  let navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
    <img src='mercedes.jpg'></img>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/logout">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul right">
        <li>
              <Link onClick={logout} to="/signup">
                Signup
              </Link>
            </li>
            <li>
              <Link onClick={logout} to="/login">
                LogIn
              </Link>
            </li>
        </ul>
      )}
      
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Products></Products>} />
          <Route path="/add" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="/update/:id"
            element={<UpdateProduct></UpdateProduct>}
          ></Route>
          <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
          <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
        </Route>

        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};
export default Header;
