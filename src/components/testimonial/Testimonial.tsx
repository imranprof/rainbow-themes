"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { TTestimonial } from "@/types";

type Props = {
  testimonials: TTestimonial[];
}


export default function Testimonial({ testimonials }: Props) {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-[linear-gradient(90deg,_#dccffd_0%,_#ffffff_55%,_#ffffff_100%)] ">
      <div className="relative max-w-[744px] mx-auto inner-container">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="border-0 bg-transparent shadow-none">
                  <div className="text-center p-6">
                    <div className="flex justify-center items-center gap-4 mb-12 ">
                      <Image
                        src={"/assets/imgs/testimonial/clients-image.png"}
                        width={977}
                        height={286}
                        alt="client-imgs"
                        className="max-w-[300px] max-h-[100px] lg:max-w-[484px] lg:max-h-[143px]"
                      />
                    </div>
                    <blockquote className="text-text-2 text-[24px] leading-[2] mb-6 mx-auto">
                      {'"Simply dummy text of the printing and '}
                      <span className="font-semibold text-text">
                        Expert Advisor
                      </span>
                      {
                        '. lorem ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled."'
                      }
                    </blockquote>
                    <div className="mb-4">
                      <div className="flex justify-center items-center">
                        <p className="font-semibold text-text text-[20px]">
                          {testimonial.author} -
                        </p>
                        <p className="text-text-2 text-[20px]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <Star
                            key={index}
                            className="w-5 h-5 fill-orange-400 text-orange-400"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-[-10px] lg:left-[-80px] bg-white hover:bg-[linear-gradient(102.44deg,_#5163FF_-0.32%,_#FE71B9_100%)] hover:text-white text-text border border-border-2/15 shadow-lg transition-all duration-300 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" />
          <CarouselNext className="right-[-10px] lg:right-[-80px] bg-white hover:bg-[linear-gradient(102.44deg,_#5163FF_-0.32%,_#FE71B9_100%)] hover:text-white text-text border border-border-2/15 shadow-lg transition-all duration-300 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" />
        </Carousel>
      </div>
    </section>
  );
}
