"use client"

import { TServicesSection } from "@/types"
import SectionTitle from "../title/SectionTitle";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { hasStackCard } from "@/lib/animation/hasStackCard";

type Props = {
  serviceData: TServicesSection;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Service = ({ serviceData }: Props) => {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {

      hasStackCard(stackRef, cardsRef, serviceData.cards.length)
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="pt-[100px] pb-[120px] bg-[linear-gradient(135deg,_#FFF9FC_0%,_#FCFCFD_100%)] " ref={stackRef}>
        <div className="inner-container" >
          <div className="ct1_1 text-center">
            <Link href={serviceData.cta1.url} className="bg-[linear-gradient(90deg,_#708BFD_0%,_#FE71B9_100%)] text-white text-[14px] font-medium px-[14px] py-[6px] rounded-[48px]">
              {serviceData.cta1.text}
            </Link>
          </div>
          <div className="heading text-center mx-auto mt-5">
            <SectionTitle title={serviceData.heading} />
          </div>
          <div className="mt-[70px] grid gap-[30px] relative">
            {serviceData.cards.map((item, index) => (
              <div key={index}>
                <div className={cn("relative top-0 left-0 w-full", index > 0 && "lg:absolute")} ref={el => { cardsRef.current[index] = el; }}>
                  <div className="absolute top-[-40px] left-0 w-full h-[50px] blur-md shadow-md z-[-1] bg-[#F6F7FF]/60 rounded-xl" />
                  <ServiceCard {...item} serial={index + 1} />
                </div>
              </div>

            ))}
          </div>
          <div className="text-center mt-10 lg:mt-[200px] relative z-[1000]">
            <Link href={serviceData.cta2.url} className={cn(buttonVariants({ variant: "primaryBlue" }), "text-white px-10 py-4 rounded-[10px]")}>
              {serviceData.cta2.text}
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Service