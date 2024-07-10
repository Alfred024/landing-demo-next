import { envs } from "app/config/env";
import { shopifyUrls } from "./url";

export async function getProducts() {
    try {
        const response = await fetch(
            shopifyUrls.allProducts,
            {headers: new Headers({ 'X-Shopify-Access-Token': envs.SHOPIFY_STORE_APIKEY || "" })}
        );
        const { products } = await response.json();
        return products;
    } catch (error) {
        throw Error('Error fetching the products');        
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
        throw Error('Error fetching the collections');       
    }
}

export async function getProductsByCollectionId( collectionId : string ){
    try {
        const response = await fetch(
            shopifyUrls.collections.single(collectionId),
            {headers: new Headers({ 'X-Shopify-Access-Token': envs.SHOPIFY_STORE_APIKEY || "" })}
        );

        const { products } = await response.json();
        return products;
    } catch (error) {
        throw Error('Error fetching the collection');       
    }    
}