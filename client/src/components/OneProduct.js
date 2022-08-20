import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setOneProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteFilter = () => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{oneProduct.title}</h2>
      <p>Price: ${oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
      <button onClick={deleteFilter} style={{ marginRight: "80px;" }}>
        Delete
      </button>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default OneProduct;
