const ProductController = require("../controllers/user.controller");

module.exports = app => {
  // app.get("/api/products", ProductController.findAllProduct);
  // app.get("/api/products/:_id", ProductController.findOneSingleProduct);
  // app.post("/api/products", ProductController.createNewProduct);
  // app.put("/api/products/:id", ProductController.updateExistingProduct);
  // app.delete("/api/products/delete/:_id", ProductController.deleteAnExistingProduct);
  app.get('/api', ProductController.index);
  app.post('/api/products', ProductController.createProduct);
  app.get('/api/products', ProductController.getAllProducts);
  app.get('/api/products/:id', ProductController.getProduct);
  app.put('/api/products/:id', ProductController.updateProduct);
  app.delete('/api/products/:id', ProductController.deleteProduct);
};