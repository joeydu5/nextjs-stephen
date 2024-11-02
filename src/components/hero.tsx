import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface heroProps {
  imgData: StaticImageData;
  imgAlt: string;
  imgTitle: string;
}

function Hero(props: heroProps) {
  const { imgData, imgAlt, imgTitle } = props;
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image fill src={imgData} style={{ objectFit: "cover" }} alt={imgAlt} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      <div className="pt-48 flex justify-center justify-center">
        <h1 className="text-white text-6xl">{imgTitle}</h1>
      </div>
    </div>
  );
}

export default Hero;
