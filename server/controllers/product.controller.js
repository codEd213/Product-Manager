const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => console.log(err));
};
module.exports.getProducts = (req, res) => {
  Product.find({})
    .then((product) => res.json(product))
    .catch((err) => console.log(err));
};
