class ProdutoService {
   constructor(){
    console.log("CONSTRUCTOR EXECUTOU");

    this.dados = [];

    for(let i = 0; i <= 10; i++){
        this.dados.push({
            id:i,
            nome:`produto ${i}`,
            preco:i
        });
    }

}

    getProduto(dados){
       return this.dados
    }

    addProduto(dados){
        dados.id = this.dados.length + 1
        this.dados.push(dados)

        return this.dados 
    }

    updateProduto(dados){
        const produto = this.dados.find(origem => origem.id == dados.id)

        if(produto){
            produto.nome = dados.nome
            produto.preco = dados.preco

            return this.dados;
        }
            
        return null;

    }
    
    deleteProduto(id){ 
        try {
            //usar o find traz o objeto, quero ver se existe uso some
            const dado = this.dados.find(origem => origem.id == id) 

            if(dado){
                this.dados = this.dados.filter(produto => produto.id != id)
                return dado
            }
        
        }catch(err){
            console.log(err);
        }
    }
    
}

export default ProdutoService