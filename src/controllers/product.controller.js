import ProductService from '../services/product.service.js'

class ProductController {
  constructor() {
    this.product = new ProductService()
  }

  async getProducts(req, res) {
    const datas = await this.product.getProducts()
    return res.status(200).json(datas)
  }

  async postProduct(req, res) {
    const data = req.body
    const newProduct = await this.product.addProduct(data)
    return res.status(201).json(newProduct)
  }

  async putProduct(req, res) {
    const { id } = req.params
    const data = req.body
    const updateProduct = await this.product.updateProduct(Number(id), data)
    return res.status(200).json(updateProduct)
  }

  async deleteProduct(req, res) {
    const { id } = req.params
    const deleteProduct = await this.product.deleteProduct(Number(id))
    return res.status(200).json({
      message: "deletado com sucesso",
      deleteProduct
    })
  }
}

export default ProductController