import { ProductsContainer } from "app/components/shared/ProductsContainer"
import { getProducts , getProductsByCollectionId } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    routes: string[],
  }
  searchParams?: {
    'collectionId': string
  }
}

export default async function Category(props: CategoryProps) {
  let products;
  const collectionId = props.searchParams?.collectionId;

  if (collectionId && collectionId.length > 0) {
    products = await getProductsByCollectionId(collectionId);
  } else {
    products = await getProducts();
  }

  return (
    <>
      {
        products ?
          <ProductsContainer
            products = {products}
          />
        : 
          'NO SE OBTUVIEORN LOS PRODUCTOS, PUTO'
      }
    </>

  );
}