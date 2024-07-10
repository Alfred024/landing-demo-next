import { ProductCard } from "../ProductCard";
import { getProducts, getProductsByCollectionId } from "app/services/shopify/products";

interface ProductsContainerProps {
    products : {
        'product': string,
        'productIcon': string,
        'content': string,
    }[]
}

export const ProductsContainer = async ( productsProps : ProductsContainerProps ) => {
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-center">
                {productsProps.products.map((product : any) =>{
                    return (
                        <ProductCard
                            product={product.title}
                            productIcon={product.images[0].src}
                            content={product.body_html}
                        />
                    );
                })}
            </div>
        </>
    );
}