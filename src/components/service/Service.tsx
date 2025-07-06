import { TServicesSection } from "@/types"
import SectionTitle from "../title/SectionTitle";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

type Props = {
  serviceData: TServicesSection;
}

const Service = ({ serviceData }: Props) => {
  return (
    <div className="pt-[100px] pb-[120px] bg-[linear-gradient(135deg,_#FFF9FC_0%,_#FCFCFD_100%)] ">
      <div className="inner-container">
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
            <div className="" key={index}>
              <ServiceCard {...item} serial={index + 1} />
            </div>
          ))}
        </div>
        <div className="text-center mt-10 lg:mt-[60px]">
          <Link href={serviceData.cta2.url} className={cn(buttonVariants({ variant: "primaryBlue" }), "text-white px-10 py-4 rounded-[10px]")}>
            {serviceData.cta2.text}
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Service