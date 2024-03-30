const Product = require('../models/product.model.js');

//GET - busca todos os produtos do DB
const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//GET = busca um único produto no DB
const getSingleProduct = async (req, res) => {
    try {
      const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//POST - cria um produto novo no DB
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        //sucesso! - 200 -> bem-sucedido
        res.status(200).json(product);
    } catch (error) {
        //erro de servidor - 500 -> error
        res.status(500).json({message: error.message});
    }
}

//PUT - UPDATE - atualiza um produto no DB
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        //se o produto nao for encontrado / inexistente
        if (!product) {
            return res.status(404).json({message: "Produto não encontrado"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Produto não encontrado"});
        
        }

        res.status(200).json({message: "Produto deletado com sucesso!"});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { 
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct

};