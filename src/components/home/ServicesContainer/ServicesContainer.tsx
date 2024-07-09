import { ServiceCard } from "../ServiceCard";

async function getProducts() {
    try {
        const response = await fetch(
            `${process.env.SHOPIFY_STORE_HOST}/admin/api/2023-07/products.json`,
            {
                headers: new Headers({ 'X-Shopify-Access-Token': process.env.SHOPIFY_STORE_APIKEY || "" })
            }
        );
        const { products } = await await response.json();
        return products;
    } catch (error) {
        throw Error('Error fetching the products');        
    }
}

export const ServicesContainer = async () => {
    const products = await getProducts();
    
    return (
        <>
            <h2>Nuestros servicios</h2>
            <div className="grid grid-cols-3 gap-5 items-center">
                {products.map((product : any) =>{
                    return (
                        <ServiceCard
                            service={product.title}
                            serviceIcon={product.images[0].src}
                            content={product.body_html}
                        />
                    );
                })}
            </div>
        </>
    );
}