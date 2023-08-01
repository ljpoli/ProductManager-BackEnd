const ProductManager = require('./desafio2');

const productManager = new ProductManager('productos.json');

// Agregar productos
try {
  productManager.addProduct({
     title: "productD",
     description: "dd",
     price: 500,
     thumbnail: "url",
     code: "cd12",
     stock: 500,
  });

  productManager.addProduct({
    title: "productE",
     description: "ee",
     price: 800,
     thumbnail: "url",
     code: "cd34",
     stock: 500
  });

 
} catch (error) {
  console.error(error.message);
}

// Obtener todos los productos
const allProducts = productManager.getProduct();
console.log("Todos los productos:");
console.log(allProducts);

// Obtener producto por ID
try {
  const productById = productManager.getProductById(2);
  console.log("Producto con ID 2:");
  console.log(productById);
} catch (error) {
  console.error(error.message);
}

// Actualizar producto
try {
  productManager.updateProduct(1, { price: 600, stock: 200 });
  console.log("Producto con ID 1 actualizado.");
} catch (error) {
  console.error(error.message);
}

// Eliminar producto
try {
  productManager.deleteProduct(3);
  console.log("Producto con ID 3 eliminado.");
} catch (error) {
  console.error(error.message);
}

// Guardar los cambios en el archivo
productManager.saveProductsToFile();
