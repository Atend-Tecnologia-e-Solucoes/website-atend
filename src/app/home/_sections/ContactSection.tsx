"use client";

import { FadeInUp, ScaleIn } from "@/components/animations";
import ContactForm from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ou via e-mail
          </h2>
          <p className="text-xl text-gray-600">
            Descubra como nossa plataforma BaaS pode transformar seu negócio
            financeiro
          </p>
        </FadeInUp>
        <ScaleIn delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <ContactForm />
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
