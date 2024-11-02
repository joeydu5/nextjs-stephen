import React from "react";
import Hero from "@/components/hero";
import performanceImg from "public/images/performance.jpg";

function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding picture"
      imgTitle="We server high performance applications!s"
    />
  );
}

export default PerformancePage;
