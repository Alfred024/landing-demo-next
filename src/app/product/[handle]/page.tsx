import { getProductById } from "app/services/shopify/products"
import Image from "next/image";

interface ProductPageProps{
    searchParams : {
        id : string
    }
}

export default async function ProductPage( {searchParams} : ProductPageProps ) {
    let product = await getProductById(searchParams.id);

    return (
        <>
            {
                product ? <main className=''>
                <section className='max-w-6xl mx-auto my-0 grid gap-20 mt-20 grid-cols-1 columns-md'>
                  <Image
                    className="rounded-lg m-auto mb-4"
                    loading="eager"
                    src={product[0].image}
                    width={500}
                    height={500}
                    quality={80}
                    alt={product[0].title}
                  />
                </section>
                <section className='flex-col'>
                  <h1 className=''>{product[0].title}</h1>
                  <p className='w-fit text-xl'>{product[0].tags}</p>
                  <p className=''>
                    {product[0].description}
                  </p>
                  <span className=''>
                    $ {product[0].price}
                  </span>
                  {/* <ProductViewItemsOrder maxQuantity={product.quantity} /> */}
                </section>
              </main> : ''
            }
        </>
    );
}