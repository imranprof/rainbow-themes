import { TAboutSection } from '@/types';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionTitle from "@/components/title/SectionTitle";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';


type Props = {
  aboutData: TAboutSection;
}

export default function About({ aboutData }: Props) {
  return (
    <section className="relative pt-[90px] pb-[100px]">
      <div className="inner-container grid lg:grid-cols-2 gap-[78px] ">
        <div className="relative w-full xl:max-w-[575px]">
          <Image
            src={aboutData.image1}
            alt="Business Leader"
            width={318}
            height={540}
            className="rounded-xl shadow-lg"
          />
          <div className="absolute bottom-[-10%] right-0 w-[308px] h-[360px] rounded-xl shadow-lg overflow-hidden border-4 border-white">
            <Image
              src={aboutData.image2}
              alt="Team Meeting"
              width={308}
              height={360}
              className="object-cover"
            />
          </div>
          <div className="w-[150px] h-[150px] xl:w-[215px] xl:h-[215px] absolute top-0 right-0 ">
            <Image
              src={aboutData.exp_img}
              alt="Team Meeting"
              width={430}
              height={430}
              className="object-cover "
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          <Link href={"#"} className="bg-[linear-gradient(90deg,_#708BFD_0%,_#FE71B9_100%)] text-white px-[14px] py-[6px] rounded-[48px]">
            Know about us
          </Link>
          <SectionTitle title={aboutData.heading} className="max-w-[550px]" />
          <p className="">
            {aboutData.description}
          </p>
          <ul className="">
            {aboutData.features.map((item, index) => (
              <li className="leading-[2] text-[18px] text-text-2" key={index}><span className="inline-flex justify-center items-center w-[26px] h-[26px] bg-white shadow-md rounded-full me-[17px]"><span className="inline-block bg-text-3 h-2 w-2 rounded-full"></span></span> {item}</li>
            ))}

          </ul>

          <div className="flex items-center space-x-4 mt-4">
            <Link href={"#"} className={cn(buttonVariants({ variant: "primaryBlue" }), "text-white px-10 py-4 rounded-[10px]")}>
              {aboutData.cta.text}
            </Link>
            <div className="flex items-center">
              <div className="p-[2px] rounded-full bg-gradient-to-b from-[#0F34F87A] to-[#091F9200] shadow-sm me-5">
                <Image
                  src={aboutData.ceoDetails.avatar}
                  alt="ceo-avatar"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div>
                <Image
                  src={aboutData.ceoDetails.signature}
                  alt="ceo-signature"
                  width={130}
                  height={59}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 xl:grid-cols-5 gap-x-[91px] gap-y-5 mt-[100px] text-center inner-container">
        {aboutData.stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-[clamp(40px,6vw,80px)] text-text leading-[1.25] pt-5 border-t border-border-2/15 ">
              {item.value}
              {(index === 0 || index === 1) ? (
                <span className="text-[clamp(24px,4vw,50px)] ">%</span>
              ) : (
                <span className="text-[clamp(24px,4vw,50px)] ">+</span>
              )}
            </h3>
            <p className="text-text-2">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
