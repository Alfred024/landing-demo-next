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
  console.log(collectionId);
  
  if (collectionId && collectionId.length > 0) {
    console.log('Filter by ID');
    products = await getProductsByCollectionId(collectionId);
  } else {
    console.log('No Filter');
    products = await getProducts();
  }


  return (
    <ProductsContainer
      products={products}
    />
  )
}