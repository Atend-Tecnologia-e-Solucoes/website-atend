import Image from "next/image";
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
} from "@/components/animations";
import {
  LockIcon,
  CoinsIcon,
  LightningIcon,
  MobileIcon,
  ArrowRightLeftIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ChartIcon,
  UsersIcon,
  CloudIcon,
} from "@/components/svgs";

export function BaaSServicesSection() {
  return (
    <section id="baas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-50 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">
              Banking as a Service
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços Financeiros Completos via BaaS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solução completa de Banking as a Service para empresas que desejam
            oferecer serviços financeiros digitais com suporte a criptomoedas,
            pagamentos instantâneos e conta digital completa
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <SlideInLeft delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/stable_coin_wallet.jpg"
                alt="Carteira de Criptomoedas"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </SlideInLeft>
          <SlideInRight>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Carteira de Criptomoedas Integrada
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Ofereça aos seus clientes uma carteira digital completa para
                armazenar, receber e enviar criptomoedas de forma segura e
                simplificada. Suporte para múltiplas criptomoedas e tokens
                estáveis (stablecoins).
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <LockIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Segurança de Nível Institucional
                    </h4>
                    <p className="text-gray-600">
                      Armazenamento em cold wallets e hot wallets com múltiplas
                      camadas de segurança e segredo compartilhado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <CoinsIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Múltiplas Criptomoedas
                    </h4>
                    <p className="text-gray-600">
                      Suporte para Bitcoin, Ethereum, USDT, USDC e outras
                      criptomoedas populares com conversão automática.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <LightningIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Transações Instantâneas
                    </h4>
                    <p className="text-gray-600">
                      Envio e recebimento de criptomoedas em segundos, com taxas
                      competitivas e confirmações rápidas na blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <SlideInLeft>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Pagamentos com Criptomoedas
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Permita que seus clientes façam pagamentos usando criptomoedas
                tanto para transações P2P quanto para pagamentos comerciais.
                Suporte completo para QR codes e links de pagamento.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <MobileIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      QR Code para Pagamentos
                    </h4>
                    <p className="text-gray-600">
                      Gere QR codes dinâmicos para pagamentos instantâneos em
                      estabelecimentos físicos e online.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <ArrowRightLeftIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Conversão Automática
                    </h4>
                    <p className="text-gray-600">
                      Converte automaticamente entre criptomoedas e moedas fiat,
                      facilitando pagamentos e recebimentos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <ShieldCheckIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Conformidade Regulatória
                    </h4>
                    <p className="text-gray-600">
                      Totalmente compatível com regulamentações financeiras,
                      incluindo KYC/AML e relatórios para autoridades
                      competentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInLeft>
          <SlideInRight delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/digital_account.jpg"
                alt="Pagamentos Digitais"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </SlideInRight>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <SlideInLeft delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pix_payment.jpg"
                alt="Pagamentos PIX"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </SlideInLeft>
          <SlideInRight>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Pagamentos PIX Instantâneos
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Ofereça pagamentos PIX instantâneos e gratuitos para seus
                clientes. Integração completa com o sistema bancário brasileiro
                para transferências 24/7 sem custos adicionais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <LightningIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Transações Instantâneas 24/7
                    </h4>
                    <p className="text-gray-600">
                      PIX disponível a qualquer hora, todos os dias da semana,
                      com confirmação em segundos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircleIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Sem Taxas de Transação
                    </h4>
                    <p className="text-gray-600">
                      Pagamentos PIX totalmente gratuitos para seus clientes,
                      reduzindo custos operacionais.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <MobileIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      QR Code e Chaves PIX
                    </h4>
                    <p className="text-gray-600">
                      Suporte completo para QR codes dinâmicos e estáticos, além
                      de chaves PIX personalizadas (CPF, email, telefone).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Cartões de Crédito
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Emita cartões físicos e virtuais para seus clientes com controle
                total sobre limites, bloqueios e configurações. Suporte completo
                para bandeiras nacionais e internacionais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircleIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cartões Físicos e Virtuais
                    </h4>
                    <p className="text-gray-600">
                      Emita cartões físicos personalizados ou cartões virtuais
                      instantâneos para uso imediato em aplicativos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <LockIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Controle Total e Segurança
                    </h4>
                    <p className="text-gray-600">
                      Gerencie limites, bloqueios, desbloqueios e configurações
                      de segurança em tempo real para cada cartão.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <ChartIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Notificações e Extratos
                    </h4>
                    <p className="text-gray-600">
                      Notificações em tempo real de todas as transações e
                      extratos detalhados disponíveis para download.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInLeft>
          <SlideInRight delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/new_card.jpg"
                alt="Cartões de Crédito e Débito"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </SlideInRight>
        </div>

        {/* Features Grid */}
        <FadeInUp delay={0.2}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScaleIn delay={0.1}>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <LightningIcon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Performance
                </h3>
                <p className="text-gray-600">
                  Tecnologia de ponta para máxima velocidade e eficiência em
                  todas as operações.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <LockIcon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Segurança
                </h3>
                <p className="text-gray-600">
                  Proteção de dados de nível empresarial com criptografia
                  avançada.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircleIcon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Interface Moderna
                </h3>
                <p className="text-gray-600">
                  Design intuitivo e responsivo para uma experiência
                  excepcional.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.4}>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <ChartIcon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analytics Avançado
                </h3>
                <p className="text-gray-600">
                  Relatórios detalhados e insights para tomar decisões baseadas
                  em dados.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.5}>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <UsersIcon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Suporte 24/7
                </h3>
                <p className="text-gray-600">
                  Equipe especializada disponível a qualquer momento para ajudar
                  você.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.6}>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CloudIcon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Integrações
                </h3>
                <p className="text-gray-600">
                  Conecte-se facilmente com as ferramentas que você já usa.
                </p>
              </div>
            </ScaleIn>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
