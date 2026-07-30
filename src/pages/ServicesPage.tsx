import React, { Suspense } from "react";
import { ServicesSection } from "../components/ServicesSection";
import { HowWeWork } from "../components/HowWeWork";

export const ServicesPage: React.FC = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <ServicesSection />
        <HowWeWork />
      </Suspense>
    </div>
  );
};
