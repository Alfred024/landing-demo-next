import { ProductCard } from "../ProductCard";
import { getProducts, getProductsByCollectionId } from "app/services/shopify/products";
import { SanitizeHTML } from "../SanitizeHTML";

interface ProductsContainerProps {
    products: ProductType[]
}

export const ProductsContainer = async (productsProps: ProductsContainerProps) => {
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-center">
                {productsProps.products.map((product: ProductType) => {
                    return (
                        <ProductCard
                            id={product.id}
                            handle={product.handle}
                            product={product.title}
                            productIcon={product.image}
                            content={product.description}
                        />
                    );
                })}
            </div>
        </>
    );
}