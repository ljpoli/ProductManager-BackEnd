class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(product) {
      const { title, description, price, thumbnail, code, stock } = product;
      
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error("Todos los campos son obligatorios");
      }
      // Control si está en uso
      const productAlreadyExit = this.products.find((p) => p.code === code);
      if (productAlreadyExit) {
        throw new Error("El código del producto ya está en uso");
      }
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error("Not found");
      }
      return product;
    }
  }
  
  const manager = new ProductManager();
  
  // Arreglo vacío []
  console.log(manager.getProducts()); 
  
  // Llamar a addProduct con campos específicos
  try {
    manager.addProduct({
      title: "Producto prueba",
      description: "Este es un producto prueba",
      price: 200,
      thumbnail: "sin imagen",
      code: "abc123",
      stock: 25,
    });
  } catch (error) {
    console.error(error.message);
  }
  
  // getProducts debe aparecer el producto recién agregado
  console.log(manager.getProducts());
  
  // Con el método addProduct y los mismos campos, tiene que dar error porque el código estará repetido
  try {
    manager.addProduct({
      title: "Producto prueba",
      description: "Este es un producto prueba",
      price: 200,
      thumbnail: "sin imagen",
      code: "abc123",
      stock: 25,
    });
  } catch (error) {
    console.error(error.message);
  }
  
  // getProductById encuentra el producto recién agregado
  const product = manager.getProductById(1);
  console.log(product);
  
  // Si el ID no existe, debe arrojar un error
  try {
    const nonExistentProduct = manager.getProductById(999);
    console.log(nonExistentProduct);
  } catch (error) {
    console.error(error.message);
  }
  