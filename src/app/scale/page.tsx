import React from "react";
import Hero from "@/components/hero";
import scaleImg from "public/images/scale.jpg";
function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="factore picture"
      imgTitle="Scale your app to infinity!"
    />
  );
}

export default ScalePage;
