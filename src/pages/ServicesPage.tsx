import React, { Suspense } from "react";
import { ServicesSection } from "../components/ServicesSection";
import { HowWeWork } from "../components/HowWeWork";
import { usePageSEO } from "../utils/seo";

export const ServicesPage: React.FC = () => {
  usePageSEO({
    title: "Serviços de Dedetização e Desentupimento | Dedetizadora Maringá",
    description:
      "Conheça todos os serviços da Dedetizadora Maringá: dedetização geral, descupinização, desratização, controle de pombos, limpeza de caixa d'água e desentupimento 24h.",
    canonical: "https://dedetizadoramaringa.com.br/servicos",
  });

  return (
    <div style={{ paddingTop: "80px" }}>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <ServicesSection />
        <HowWeWork />
      </Suspense>
    </div>
  );
};
