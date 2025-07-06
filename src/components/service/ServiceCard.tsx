
import Image from "next/image";
import SectionTitle from "../title/SectionTitle";
import Link from "next/link";
type Props = {
  title: string;
  description: string;
  cta: {
    text: string;
    url: string;
  };
  image: string;
  serial: number;
}

const ServiceCard = ({ title, description, cta, image, serial }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-[30px] md:gap-[60px] items-center  rounded-xl p-6 md:p-[50px] shadow-md w-full bg-white ">

      <div className="w-full h-auto lg:w-[414px] lg:h-[345px] overflow-hidden">
        <Image
          src={image}
          alt="Digital Marketing"
          width={414}
          height={345}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>


      <div className="w-full md:w-1/2 max-w-[604px]">
        <span className="inline-block bg-background-4  px-[15px] py-[10px] rounded-full mb-[10px]">
          <span className="text-[14px] font-medium bg-[linear-gradient(102.44deg,_#5163FF_-0.32%,_#FE71B9_100%)] bg-clip-text text-transparent">
            Service-{serial}</span>
        </span>
        <SectionTitle title={title} />
        <p className="mt-[10px] mb-5">
          {description}
        </p>
        <Link href={"#"} className="inline-block border-[2px] border-gray-300 rounded-[10px] px-7 py-4 text-[15px] text-text-2 font-semibold hover:bg-gray-100 transition">
          Read Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
