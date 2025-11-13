import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Garantir que imagens estáticas sejam servidas corretamente
  images: {
    // Permitir imagens locais da pasta public
    unoptimized: false,
    // Se estiver usando domínios externos, adicione aqui:
    // remotePatterns: [],
  },
};

export default nextConfig;
