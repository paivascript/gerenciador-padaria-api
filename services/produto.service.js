class ProdutoService {
    constructor(){
    // inicializa variaveis no constructor
        this.dados = []     
        
        for(let i = 0; i <= 10; i++){
            this.dados.push({id:i,nome:`produto ${i}`, preco:i})
       }
    }

    async getProduto(dados){
     
       return this.dados
    }

    addProduto(dados){
        this.dados.push(dados)

        return this.dados 
    }

    updateProduto(dados){
    let arrayAtualizado = [...this.dados] 
    // minha  ideia é não alterar o original ainda pra não dar problema de concorrencia, entao crio um array novo e depois passo ele para o original
      let{ id,nome,preco } = dados
      
      for(let i = 0; i < array.length; i++){
        if(array[i].id === id){
            array[i].nome = nome
            array[i].preco = preco
        }
       }

       this.dados = arrayAtualizado
    }
    
    deleteProduto(dados){
        return
    }
    
}

export default ProdutoService