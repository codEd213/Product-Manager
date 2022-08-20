const Product = require("../models/product.model");

module.exports = {
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((product) => res.json(product))
      .catch((err) => console.log(err));
  },

  getProducts: (req, res) => {
    Product.find({})
      .then((product) => {
        console.log(product);
        res.json(product);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  },

  getOneProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneProduct) => res.json(oneProduct))
      .catch((err) => console.log(err));
  },

  updateProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidorators: true,
    })
      .then((updatedProduct) => {
        console.log(updatedProduct);
        res.json(updatedProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((deletedProduct) => {
        console.log(deletedProduct);
        res.json(deletedProduct);
      })
      .catch((err) => console.log(err));
  },
};
