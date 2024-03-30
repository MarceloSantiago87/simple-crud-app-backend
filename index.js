//npmjs.com (express - nodemon - mongoose)
const express = require ('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
//importa as rotas/routes de onde virao os produtos
const productRoute = require("./routes/product.route.js");

// ## Middleware ##
//aceita json
app.use(express.json());
//aceita formURLEncoded
app.use(express.urlencoded({extended: false}));


// ## Routes ##
app.use("/api/products", productRoute);

//obs:
// client -> server = request
// server -> client = response

// ## Testing Hello ##
app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

mongoose
.connect("mongodb+srv://adminbubble:190107@backenddb.to5wumx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("### Conexão bem sucedida! ###");
    //3000 é a porta selecionada!
    //localhost:3000
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
    console.log("### FALHA NA CONEXAO ###");
});