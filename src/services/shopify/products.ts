import { envs } from "app/config/env";
import { shopifyUrls } from "./url";
// import next from "next";

// MANEJO DE CACHÉ DENTRO DEL "fetch"

export async function getProducts() {
    try {
        const response = await fetch(
            shopifyUrls.allProducts,
            {
                headers: new Headers({ 'X-Shopify-Access-Token': envs.SHOPIFY_STORE_APIKEY || "" }),
                // quit cache
                // cache: 'no-cache'
                // cache based on time
                // next: {
                //     revalidate: 3600 
                // }
            },
        );
        const { products } = await response.json();
        let productsTranformed = transformProducts(products);
        return productsTranformed;
    } catch (error) {
        console.log('Error fetching the products');
    }
}

export async function getProductById( id : string ) {
    try {
        const response = await fetch(
            `${shopifyUrls.allProducts}?ids=${id}`,
            {headers: new Headers({ 'X-Shopify-Access-Token': envs.SHOPIFY_STORE_APIKEY || "" })}
        );
        const { products } = await response.json();
        let productTranformed = transformProducts(products);
        return productTranformed;
    } catch (error) {
        console.log('Error fetching the products');
    }
}

export async function getProductsCollections() {
    try {
        const response = await fetch(
            shopifyUrls.collections.all,
            {headers: new Headers({ 'X-Shopify-Access-Token': envs.SHOPIFY_STORE_APIKEY || "" })}
        );
        const { smart_collections } = await response.json();

        let collections : {'id': string, 'title': string, 'handle': string}[] = [];
        
        smart_collections.map(( collection : any )=>{
            collections.push({
                'id': collection.id,
                'title': collection.title,
                'handle': collection.handle,
            });
        });
        return collections;
    } catch (error) {
        console.log('Error fetching the collections');      
    }
}

export async function getProductsByCollectionId( collectionId : string ){
    try {
        const response = await fetch(
            shopifyUrls.collections.single(collectionId),
            {headers: new Headers({ 'X-Shopify-Access-Token': envs.SHOPIFY_STORE_APIKEY || "" })}
        );
        const { products } = await response.json();
        let productsTranformed = transformProducts(products);
        return productsTranformed;
    } catch (error) {
        console.log('Error fetching the collection');
    }    
}

function transformProducts( products : [] ) {
    let productsTranformed : ProductType[] = [];
    products.map((productItem : any) =>{
        productsTranformed.push({
                id : productItem.id,
                title : productItem.title,
                description : productItem.body_html,
                price: productItem.price,
                image: productItem.image,
                quantity: productItem.quantity,
                handle: productItem.handle,
                tags: productItem.tags,
        });
    });
    return productsTranformed;                  
}