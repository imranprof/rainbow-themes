import { TServicesSection } from "@/types"
import SectionTitle from "../title/SectionTitle";
import ServiceCard from "./ServiceCard";

type Props = {
  serviceData: TServicesSection;
}

const Service = ({ serviceData }: Props) => {
  return (
    <div>
      <div className="inner-container">
        <div className="ct1_1">

        </div>
        <div className="heading">
          <SectionTitle title={serviceData.heading} />
        </div>
        <div>
          {serviceData.cards.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Service