import ProdutoService from '../services/produto.service.js'
    
const produto = new ProdutoService()

class ProdutoController {

  static getProduto(req, res) {
    const dados = produto.getProduto()

    return res.status(200).json(dados);
  }

  static async postProduto(req, res) {
   
    const dados = await produto.addProduto(req.body)
    return res.status(201).json(dados);
  }

  static async putProduto(req, res) {
    const dados = await produto.updateProduto(req.body)
    return res.status(204).json(dados);
  }

  static async deleteProduto(req, res) {
    const dados = await produto.deleteProduto(req.body)
    return res.status(204).json(dados);
  }
}

export default ProdutoController;