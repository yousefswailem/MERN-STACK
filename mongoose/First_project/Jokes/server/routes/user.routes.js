const ProductController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/products", ProductController.findAllProduct);
  app.get("/api/products/:_id", ProductController.findOneSingleProduct);
  app.post("/api/products/new", ProductController.createNewProduct);
  // app.put("/api/products/update/:_id", ProductController.updateExistingProduct);
  // app.delete("/api/products/delete/:_id", ProductController.deleteAnExistingProduct);
};