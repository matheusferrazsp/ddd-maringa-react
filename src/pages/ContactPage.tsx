import React, { Suspense } from "react";
import { ContactSection } from "../components/ContactSection";
import { usePageSEO } from "../utils/seo";

export const ContactPage: React.FC = () => {
  usePageSEO({
    title: "Contato e Orçamento 24h | Dedetizadora Maringá",
    description:
      "Fale com a Dedetizadora Maringá pelo WhatsApp (11) 94072-4379 ou solicite um orçamento online. Base em Embu das Artes e atendimento 24h na Grande São Paulo.",
    canonical: "https://dedetizadoramaringa.com.br/contato",
  });

  return (
    <div style={{ paddingTop: "80px" }}>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};
