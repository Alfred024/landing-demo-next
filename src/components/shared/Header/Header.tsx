import Image from "next/image"
import Link from "next/link";

export const Header = ()=>{
    return(
        <header className="text-center p-6">
            <nav className="flex justify-between">
                <Link href={'/'}>
                    <Image
                        alt="EVOLVE LOGO"
                        src={`demo-logo.svg`}
                        width={100}
                        height={50}
                    />
                </Link>

                <ul className="flex gap-3">
                    <Link href={'/store'}>
                        <li>Plantillas / Tienda</li>
                    </Link>
                    <li>Personalización</li>
                    <li>Nosotros</li>
                    <li>Paquetes</li>
                    <li>Blogs</li>
                    <li>FAQ´S</li>
                </ul>
            </nav>
        </header>
    );
}