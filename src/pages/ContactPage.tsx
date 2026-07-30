import React, { Suspense } from "react";
import { ContactSection } from "../components/ContactSection";

export const ContactPage: React.FC = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};
