import { ServicesContainer } from "app/components/home/ServicesContainer";
import Image from "next/image";

export default function Home() {
  return (

    <main className="flex-col justify-center p-6">
      {/* PROBLEMA: NO SE CENTRA BIEN EL CONTENIDO */}
      <div className="min-h-64">
        <h1>EVOLUCIONA TU MUNDO DIGITAL</h1>
        <button className="evolve-gradient-btn max-w-56 rounded-3xl p-3">
          Contáctanos
        </button>
      </div>

      <ServicesContainer/>
    </main>
  );
}
