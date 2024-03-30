//all the routes related to products will be here

const express = require("express");
//importa os modelos dos produtos
const Product = require("../models/product.model.js");
const router = express.Router();
//importa os controllers dos produtos
const {getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

//busca todos os produtos do DB
router.get('/', getProducts);

//busca um produto do DB
router.get("/:id", getSingleProduct);

//cria um novo produto no DB
router.post('/', createProduct);

//atualiza um produto no DB
router.put('/:id', updateProduct);

//deleta um item do DB
router.delete('/:id', deleteProduct);

module.exports = router;