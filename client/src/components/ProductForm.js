import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
  const { productList, setProductList } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProductList([...productList, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  };

  // const formDataDivStyle = {
  //   textAlign: "left",
  //   width: "450px",
  //   margin: "auto",
  // };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Manager</h1>
      <form onSubmit={onSubmitHandler} style={{ marginTop: "20px" }}>
        <p style={{ inputDataDivStyle }}>
          <label>Title: </label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p style={{ inputDataDivStyle }}>
          <label>Price: </label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p style={{ inputDataDivStyle }}>
          <label>Description: </label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </p>
        <p style={{ inputDataDivStyle }}>
          <input
            type="submit"
            value="Submit Form"
            style={{ marginLeft: "125px" }}
          />
        </p>
      </form>
    </div>
  );
};

export default ProductForm;
