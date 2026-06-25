import ProductService from '../services/product.service.js'

class ProductController {
  constructor(){
    this.product = new ProductService()
  }
  
   async getProducts(req, res) {
    const datas =  await this.product.getProducts()
    return res.status(200).json(datas);
  }

   async postProduct(req, res) {
    const data = req.body
    const newProduct = await this.product.addProduct(data)
    return res.status(201).json(newProduct);
  }

  async putProduct(req, res) {
    return res.status(204).send();
  }

  async deleteProduct(req, res) {
    return res.status(204).send();
  }
}

export default ProductController;