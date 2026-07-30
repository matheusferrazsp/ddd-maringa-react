import React, { Suspense } from "react";
import { CorporateSection } from "../components/CorporateSection";

export const CorporatePage: React.FC = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <CorporateSection />
      </Suspense>
    </div>
  );
};
