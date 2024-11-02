import React from "react";
import Hero from "@/components/hero";
import reliabilityImg from "public/images/reliability.jpg";
function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="welding picture"
      imgTitle="Super high reliable hosting!"
    />
  );
}

export default ReliabilityPage;
