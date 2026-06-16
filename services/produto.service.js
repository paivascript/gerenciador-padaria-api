class ProdutoService {
    constructor(){

    }

    async getProduto(){
        let dados = []
        for(let i =0; i <= 10; i++){
            dados.push({nome:`produto ${i}`, preco:i})
        }
        return dados
    }

    addProduto(){}

    updateProduto(){}
    
    deleteProduto(){}
    
}

export default ProdutoService