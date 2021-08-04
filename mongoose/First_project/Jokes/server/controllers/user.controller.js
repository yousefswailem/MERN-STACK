// const Product = require("../models/user.model");


// module.exports.createNewProduct = (req, res) => {
//   Product.create(req.body)
//     .then(newlyCreatedProduct => res.json({ Products: newlyCreatedProduct }))
//     .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
// };

// module.exports.findAllProduct = (req, res) => {
//   Product.find({})
//     .then(allDaProducts => res.json({ Products: allDaProducts }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleProduct = (req, res) => {
// 	Product.findOne({ _id: req.params._id })
// 		.then(oneSingleProduct => res.json({ Products: oneSingleProduct }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingProduct = (req, res) => {
//   Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
//     .then(updatedProduct => res.json({ Products: updatedProduct }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingProduct = (req, res) => {
//   Product.deleteOne({ _id: req.params._id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

const { Product } = require('../models/user.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createProduct = (request, response) => {
    const { title,price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}