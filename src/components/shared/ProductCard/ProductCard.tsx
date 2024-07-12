import Image from "next/image";
import Link from "next/link";

interface ProductCardProps{
    id : string;
    product : string;
    handle : string;
    productIcon : string;
    content? : string;
}

export const ProductCard = ( cardProps : ProductCardProps ) =>{
    return(
        <Link href={`/product/${cardProps.handle}?id=${cardProps.id}`}>
            <div className="flex-col justify-center border-none rounded-3xl p-5 bg-slate-900">
                <Image 
                    width={50}
                    height={50}
                    src={cardProps.productIcon} 
                    alt={'ICON'} 
                    loading="eager" />

                <h2>{cardProps.product}</h2>

                {cardProps.content ?? <p>cardProps.content</p> }
            </div>
        </Link>
    );
}