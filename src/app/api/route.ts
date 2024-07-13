import { getProductById, getProducts } from "app/services/shopify/products";

export async function GET(ids : string) {
    console.log('IDSSS');
    console.log(ids);
    
    
    if(ids) {
        const products = await getProductById(ids);
        return Response.json(products);
    }

    const products = await getProducts();
    return Response.json(products);
}

