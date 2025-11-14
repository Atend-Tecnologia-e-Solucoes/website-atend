import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="bg-black border-b border-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* <Image
              src="/images/iron-block-logo.png"
              alt="Iron Block"
              width={150}
              height={32}
            /> */}
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#inicio"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              Início
            </Link>
            {/* <Link
              href="#aplicativo"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              Plataforma
            </Link>
            <Link
              href="#baas"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              Serviços
            </Link> */}
            <Link
              href="https://wa.me/5511961282600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-500 transition"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
