import { prisma } from "../config/db.js"; // Com chaves agora vai funcionar!

class ProductService {
    async getProducts(){
        return await prisma.produto.findMany();
    }

    async addProduct(data){
        return await prisma.produto.create({data });
    }

    updateProduct(){}
    deleteProduct(){
        
    }
}

export default ProductService;