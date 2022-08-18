import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});

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

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{oneProduct.title}</h2>
      <p>Price: {oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
    </div>
  );
};

export default OneProduct;
