
import Image from "next/image";
type Props = {
  title: string;
  description: string;
  cta: {
    text: string;
    url: string;
  };
  image: string;
}

const ServiceCard = ({ title, description, cta, image }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-gradient-to-br from-[#f8f9fc] to-[#ffffff] rounded-2xl p-6 md:p-10 shadow-md max-w-5xl mx-auto">

      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt="Digital Marketing"
          width={414}
          height={345}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>


      <div className="w-full md:w-1/2">
        <span className="inline-block text-sm text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full mb-2">
          Service-1
        </span>
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-500 mb-6 leading-relaxed">
          {description}
        </p>
        <button className="border border-gray-300 rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">
          Read Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
