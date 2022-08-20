import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const UpdatedProduct = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log("this is res", res);
        console.log("this is res.data", res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
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

  return (
    <div>
      <form onSubmit={submitHandler} style={{ marginTop: "20px" }}>
        <p style={{ inputDataDivStyle }}>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p style={{ inputDataDivStyle }}>
          <label>Price: </label>
          <input
            type="text"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <p style={{ inputDataDivStyle }}>
          <label>Description: </label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p style={{ inputDataDivStyle }}>
          <input type="submit" value="Update" style={{ marginLeft: "125px" }} />
        </p>
        <Link to="/">Go Home </Link>
      </form>
    </div>
  );
};

export default UpdatedProduct;
