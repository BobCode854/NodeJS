import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [pName, setpName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
   let navigate=useNavigate();
  const addProduct = async () => {
    if(!pName || !price || !category){
        alert("Enter data to all the  fields");
        return false;
    }
    let result = await fetch("http://localhost:7000/addProduct", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pName,
        price,
       category,
        user : JSON.parse(localStorage.getItem('user'))._id
      }),
    });

    result = await result.json();
    if (result) {
      alert("Product Added Successfully ");
      localStorage.setItem("product",JSON.stringify(result));
      setpName("");
      setPrice("");
      setCategory("");
      navigate("/")
      
    }
  };

 
  return (
    <div className="products">
      <div className="items">
        <h2 className="header"> Add Products </h2>
        <input
          type="text"
          placeholder="Enter product name"
          value={pName}
          onChange={(e) => {
            setpName(e.target.value);
          }}
        ></input>
        {!pName && <span className="invalid-input">*Enter valid name</span>}
        <input
          type="text"
          placeholder="Enter product Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        {!price && <span className="invalid-input">*Enter valid price</span> }
        <input
          type="text"
          placeholder="Enter product category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        {!category && <span className="invalid-input">*Enter valid category</span>}
        </div>
        <div className="buttonElement">
        <button className="button" type="button" onClick={addProduct}>
          Add Product
        </button>
        </div>
    </div>
  );
};
export default AddProduct;
