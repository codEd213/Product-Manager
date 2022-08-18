const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => console.log(err));
};
module.exports.getProducts = (req, res) => {
  Product.find({})
    .then((product) => {
      console.log(product);
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((person) => res.json(person))
    .catch((err) => console.log(err));
};
