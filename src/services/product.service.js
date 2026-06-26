import { prisma } from "../config/db.js"; // Com chaves agora vai funcionar!

class ProductService {
    async getProducts(){
        return await prisma.produto.findMany();
    }

    async addProduct(data){
        return await prisma.produto.create({data });
    }

    async updateProduct(id,data){
        const updateProduct = await prisma.produto.update({
            where: { id },
            data
        });
    }

    async deleteProduct(id){
        return await prisma.produto.delete({
            where: {
                id: id
            },
        });
    }
}

export default ProductService;