"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaPlay } from "react-icons/fa6";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import hasScaleAnim from "@/lib/animation/hasScaleAnim";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasScaleAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="pt-[71px] relative pb-[157px] overflow-hidden" ref={containerRef}>
      <div className="inner-container">
        <div className="content_left">
          <div className="">
            <div className="title_wrapper relative max-w-[1007px] ">
              <div className="has_scale_anim">
                <h1 className="text-text text-[clamp(32px,8vw,100px)] leading-[110%] tracking-[-2%] font-semibold inline ">
                  We shape the future of{" "}
                  <span className="bg-[linear-gradient(90deg,_#5163FF_8.38%,_#C872F2_35.8%,_#FE71B9_59.75%)] bg-clip-text text-transparent">
                    business
                  </span>
                </h1>
                <Image
                  src={"/assets/imgs/icon/Rocket-small.png"}
                  alt="rocket-icon"
                  width={92}
                  height={92}
                  className="lg:inline-flex ms-[5px] mt-[-46px] hidden"
                />
              </div>
              <Image
                src={"/assets/imgs/icon/celebrate.png"}
                alt="celebrate-icon"
                width={92}
                height={92}
                className="absolute top-[-50px] right-[-50px] hidden lg:block"
              />

            </div>

            <p className="mt-[26px] max-w-[576px]">
              A business consultant is a professional who provides expert advice
              and guidance to businesses on various aspects such.
            </p>
          </div>

          <div className="bottom_left mt-[50px]">
            <div className="flex gap-[30px] items-center">
              <Link href={"#"} className={cn(buttonVariants({ variant: "primaryBlue" }), "text-white !px-10 !py-4 !text-[18px] !leading-[1.82] font-semibold font-primary")}>
                Explore more
              </Link>
              <div className="flex items-center gap-[10px]">
                <div className="icon w-[50px] h-[50px] flex justify-center items-center rounded-full border-[2px] border-border-2/10">
                  <LiaPhoneVolumeSolid className="text-text-3" />
                </div>
                <div className="">
                  <p className="!text-[13px] !leading-none">Free Consultant</p>
                  <p className="mt-[10px] !text-[17px] !font-medium !text-text !leading-none">(406) 555-0120</p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-[60px]">
              <div>
                <Image
                  src={"/assets/imgs/client/Clients.png"}
                  alt="client-img"
                  width={175}
                  height={61}
                  className=""
                />
              </div>
              <p className="max-w-[198px] !text-[16px] !leading-[1.5]"><span className="text-text-3 font-medium">2.5K+</span> Business Peoples
                Already Registered</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative xl:absolute bottom-[-54px] right-[-60px]">
        <div
          className="w-[1000px] h-[507px] 2xl:w-[1100px] 2xl:h-[607px]"
          style={{
            WebkitMaskImage: "url('/assets/imgs/hero/Banner_Img.png')",
            WebkitMaskSize: 'cover',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: "url('/assets/imgs/hero/Banner_Img.png')",
            maskSize: 'cover',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
        >
          <Image
            src="/assets/imgs/hero/looking-laptop-1.png"
            alt="hero-img"
            width={1100}
            height={607}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-[175px] w-[175px] absolute top-[-15%] right-[38.6%] rounded-full flex justify-center items-center">
          <Image width={175} height={175} src={"/assets/imgs/icon/Circle-Text.png"} alt="" className="absolute top-0 left-0" />
          <Button className="w-[60px] h-[60px] rounded-full bg-[linear-gradient(180deg,_#708BFD_0%,_#FE71B9_100%)]">
            <FaPlay className="text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
