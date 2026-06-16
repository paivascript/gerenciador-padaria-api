import ProdutoService from '../../src/services/produto.service.js'
    
const produto = new ProdutoService()

class ProdutoController {

  static getProduto(req, res) {
    const dados = produto.getProduto()
    console.log(dados);
    return res.status(200).json(dados);
  }

  static async postProduto(req, res) {

    const dados = await produto.addProduto(req.body)
    return res.status(201).json(dados);
  }

  static async putProduto(req, res) {
    const dados = await produto.updateProduto({id:Number(req.params.id), ...req.body})
    return res.status(200).json(dados);
  }

  static async deleteProduto(req, res) {
    const dados = await produto.deleteProduto(Number(req.params.id))
    return res.status(200).json({message: "Produto deletado com sucesso", dados: dados});
  }
}

export default ProdutoController;