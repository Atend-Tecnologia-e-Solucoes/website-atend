import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FadeInUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
} from "@/components/animations";
import { CheckIcon } from "@/components/svgs";

export function ApplicationShowcaseSection() {
  return (
    <section id="aplicativo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Plataforma BaaS Completa
          </h2>
          <p className="text-xl text-gray-600">
            Soluções integradas de Banking as a Service para seu negócio crescer
          </p>
        </FadeInUp>

        <FadeIn delay={0.2}>
          <Tabs defaultValue="app" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="app">Aplicativo</TabsTrigger>
              <TabsTrigger value="backoffice">Backoffice</TabsTrigger>
              <TabsTrigger value="web">Internet Banking</TabsTrigger>
            </TabsList>

            <TabsContent value="app" className="mt-8">
              <ScaleIn>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    <SlideInLeft>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Aplicativo Mobile
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          Ofereça serviços bancários completos através de um
                          aplicativo móvel white-label. Seus clientes podem
                          realizar transações, pagamentos e gerenciar suas
                          contas digitais de qualquer lugar.
                        </p>
                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Conta digital completa integrada
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Pagamentos PIX instantâneos
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Transferências e TED/DOC em tempo real
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Carteira de criptomoedas integrada
                            </span>
                          </li>
                        </ul>
                      </div>
                    </SlideInLeft>
                    <SlideInRight delay={0.2}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src="/images/pix-express-completo-v2-1166x527.png"
                          alt="Aplicativo Mobile"
                          width={1166}
                          height={527}
                          className="w-full h-auto object-cover"
                          priority
                        />
                      </div>
                    </SlideInRight>
                  </div>
                </div>
              </ScaleIn>
            </TabsContent>

            <TabsContent value="backoffice" className="mt-8">
              <ScaleIn>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    <SlideInLeft delay={0.2}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                        <Image
                          src="/images/dashboard.png"
                          alt="Painel Administrativo Web"
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover"
                          priority
                        />
                      </div>
                    </SlideInLeft>
                    <SlideInRight>
                      <div className="flex flex-col justify-center order-1 lg:order-2">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Painel Administrativo
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          Controle total sobre sua operação bancária através de
                          um painel administrativo completo. Visualize
                          transações, gerencie contas, configure produtos
                          financeiros e monitore métricas em tempo real.
                        </p>
                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Gestão completa de contas digitais
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Monitoramento de transações e compliance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              KYC/AML automatizado e integrado
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Configuração de produtos e tarifas
                            </span>
                          </li>
                        </ul>
                      </div>
                    </SlideInRight>
                  </div>
                </div>
              </ScaleIn>
            </TabsContent>

            <TabsContent value="web" className="mt-8">
              <ScaleIn>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    <SlideInLeft>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Internet Banking
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          Ofereça uma experiência completa de internet banking
                          para seus clientes, totalmente personalizada com sua
                          marca. Acesso web completo com todas as
                          funcionalidades bancárias.
                        </p>
                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Interface totalmente personalizável
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Extratos e comprovantes em PDF
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Cartões virtuais e físicos integrados
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Operações bancárias completas via web
                            </span>
                          </li>
                        </ul>
                      </div>
                    </SlideInLeft>
                  </div>
                </div>
              </ScaleIn>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
