import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInUp, ScaleIn } from "@/components/animations";
import {
  WhatsAppIcon,
  LightningIcon,
  UsersIcon,
  CheckCircleIcon,
} from "@/components/svgs";

export function WhatsAppContactSection() {
  const phoneNumber = "5511961282600";
  const message =
    "Olá! Gostaria de saber mais sobre os serviços da Atend Tech.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="whatsapp"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#25D366] to-[#20BA5A]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <WhatsAppIcon className="w-10 h-10 text-[#25D366]" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Fale Conosco no WhatsApp
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tire suas dúvidas em tempo real com nossa equipe especializada
          </p>
        </FadeInUp>

        <ScaleIn delay={0.2}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Respostas Instantâneas
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco pelo WhatsApp e receba atendimento
                rápido e personalizado da nossa equipe de especialistas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightningIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Resposta Rápida
                </h4>
                <p className="text-gray-600 text-sm">
                  Atendimento em até 5 minutos durante horário comercial
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Especialistas Disponíveis
                </h4>
                <p className="text-gray-600 text-sm">
                  Nossa equipe está pronta para ajudar você
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Atendimento Completo
                </h4>
                <p className="text-gray-600 text-sm">
                  Tire todas as suas dúvidas em uma conversa
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 text-lg px-12 py-6"
              >
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-6 h-6 inline-block mr-2" />
                  Falar no WhatsApp Agora
                </Link>
              </Button>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
