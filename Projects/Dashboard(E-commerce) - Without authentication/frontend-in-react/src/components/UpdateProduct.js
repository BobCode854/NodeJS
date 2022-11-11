import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
  const [pName, setpName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  let navigate = useNavigate();
  const param = useParams();
  const getProduct = async(id) => {
     let result=await fetch(`http://localhost:7000/getProduct/${id}`,{
        method:'get',
        headers:{
            "Content-Type":'application/json'
        },
     })
     result=await result.json();
     setpName(result.pName);
     setPrice(result.price);
     setCategory(result.category)
  };
  const updateProduct=async()=>{
   
        if(!pName || !price || !category){
             alert("Cannot Perform update with blank data");
             return false;
        }

        console.log("New Data : ",pName,price,category)

    let result=await fetch(`http://localhost:7000/update/${param.id}`,{
        method:'put',
        headers:{
            "Content-Type":'application/json'
        },
        body : JSON.stringify({pName,price,category})
     })
    
     result=await result.json();
     if(result){
        alert("Product updated successfully")
        navigate("/");
     }
     
     console.log('update : ', result)
  }
  useEffect(() => {
    getProduct(param.id)
  }, []);

  return (
    <div className="products">
      <div className="items">
        <h2 className="header"> Update Products </h2>
        <input
          type="text"
          placeholder="Enter product name"
          value={pName}
          onChange={(e) => {
            setpName(e.target.value);
          }}
        ></input>
        {!pName && <span className="invalid-input">*Product Name cannot be Blank</span>}
        <input
          type="text"
          placeholder="Enter product Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        {!price && <span className="invalid-input">*Product Price cannot be Blank</span>}
        <input
          type="text"
          placeholder="Enter product category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        {!category && <span className="invalid-input">*Product Category cannot be Blank</span>}
      </div>
      <div className="buttonElement">
        <button className="button" type="button" onClick={updateProduct}>
          Update Product
        </button>
      </div>
    </div>
  );
};
export default UpdateProduct;
