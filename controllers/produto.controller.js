import ProdutoService from '../services/produto.service.js'

class ProdutoController {
  static async getProduto(req, res) {
    const produto = new ProdutoService()
    const dados = await produto.getProduto()

    return res.status(200).json(dados);
  }

  static async postProduto(req, res) {
    return res.status(201).send("ola mundo");
  }

  static async putProduto(req, res) {
    return res.status(204).send();
  }

  static async deletProduto(req, res) {
    return res.status(204).send();
  }
}

export default ProdutoController;