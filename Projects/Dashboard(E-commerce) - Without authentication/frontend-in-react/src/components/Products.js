import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteItem = async (id) => {
    let result = await fetch(`http://localhost:7000/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      getAllProducts();
    }
  };
  const updateItem = (id) => {
    console.log("update called with item : ", id);
    navigate(`/update/${id}`);
  };
  const getAllProducts = async () => {
    let result = await fetch("http://localhost:7000/getProducts", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    setProducts(result);
    return result;
  };
  const searchProduct = async (event) => {
    let key = event.target.value;
    if (key) {
        let result = await fetch(`http://localhost:7000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    }
    else{
      getAllProducts();
    }
  };
  return (
    <div className="product-list">
      <input
        type="text"
        className="search"
        placeholder="Search Product"
        onChange={searchProduct}
      ></input>

      <ul className="headerTable">
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
      </ul>
      <div>
        { products.length>0 ? products.map((item, index) => (
          <ul key={index}>
            <li>{index + 1}</li>
            <li>{item.pName}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <button className="delete" onClick={() => deleteItem(item._id)}>
              Delete
            </button>
            <button className="update" onClick={() => updateItem(item._id)}>
              Update
            </button>
          </ul>
        )) : <h3 class="NoResult"> No Result Found</h3>}
      </div>
    </div>
  );
};

export default Products;
