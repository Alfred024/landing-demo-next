import Image from "next/image";

interface ServiceCardProps{
    service : string;
    serviceIcon : string;
    content? : string;
}

export const ServiceCard = ( cardProps : ServiceCardProps ) =>{
    return(
        <div className="flex-col justify-center border-none rounded-3xl p-5 bg-slate-900">
             <Image 
                width={50}
                height={50}
                src={cardProps.serviceIcon} 
                alt={'ICON'} 
                loading="eager" />

            <h2>{cardProps.service}</h2>

            {cardProps.content ?? <p>cardProps.content</p> }
        </div>
    );
}