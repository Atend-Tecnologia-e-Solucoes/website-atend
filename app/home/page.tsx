import {
  Navigation,
  HeroSection,
  ApplicationShowcaseSection,
  BaaSServicesSection,
  WhatsAppContactSection,
  ContactSection,
  Footer,
} from "./_sections";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <HeroSection />
      <ApplicationShowcaseSection />
      <BaaSServicesSection />
      <WhatsAppContactSection />
      {/* <ContactSection /> */}
      <Footer />
      <WhatsAppButton
        phoneNumber="5511961282600"
        message="Olá! Gostaria de saber mais sobre os serviços da Atend Tech."
      />
    </div>
  );
}
