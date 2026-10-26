import React, { Suspense } from "react";
import { CorporateSection } from "../components/CorporateSection";
import { usePageSEO } from "../utils/seo";

export const CorporatePage: React.FC = () => {
  usePageSEO({
    title: "Atendimento para Empresas e Condomínios | Dedetizadora Maringá",
    description:
      "Controle integrado de pragas (MIP), laudo técnico com ART e conformidade ANVISA para condomínios, restaurantes, comércios, indústrias e escolas na Grande SP.",
    canonical: "https://dedetizadoramaringa.com.br/empresas",
  });

  return (
    <div style={{ paddingTop: "80px" }}>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <CorporateSection />
      </Suspense>
    </div>
  );
};
