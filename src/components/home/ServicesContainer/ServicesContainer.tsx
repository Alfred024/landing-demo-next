import { ServiceCard } from "../ServiceCard";
import { getProducts, getProductsByCollectionId } from "app/services/shopify/products";


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