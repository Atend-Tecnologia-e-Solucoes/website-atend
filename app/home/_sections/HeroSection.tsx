import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInUp } from "@/components/animations";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn className="text-center">
          <FadeInUp delay={0.2}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Banking as a Service que
              <span className="text-primary-500"> Revoluciona</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Plataforma completa de BaaS para empresas que desejam oferecer
              serviços financeiros digitais, pagamentos e carteira de
              criptomoedas sem a complexidade de construir do zero.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="#contato">Começar Agora</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#aplicativo">Saiba Mais</Link>
              </Button>
            </div>
          </FadeInUp>
        </FadeIn>
      </div>
    </section>
  );
}
