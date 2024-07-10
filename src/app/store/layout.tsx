import { getProductsCollections } from "app/services/shopify/products"
import Link from "next/link";


export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getProductsCollections();

  return (
    <main className="p-3">
      {/* PONER EL NAVBAR PARA NAVEGAR POR LAS CATEGORÍAS */}
      <ul className="flex justify-between gap-2 p-2">
        {collections.map((item) => 
          <Link href={`store/${item.handle}?collectionId=${item.id}`}>
            <li className="text-xs font-light border p-1 rounded-lg border-pink-900 hover:bg-purple-900">
              {item.title}
            </li>
          </Link> 
        )}
      </ul>

      {children}
    </main>
  )
}