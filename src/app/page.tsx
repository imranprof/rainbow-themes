import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Service from "@/components/service/Service";
import TextSlider from "@/components/slider/TextSlider";
import about from "@/content/about.json"
import service from "@/content/service.json"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TextSlider />
      <About aboutData={about.aboutData} />
      <Service serviceData={service.servicesSection} />
      <div className="w-[90vw] h-[100vh]"></div>
    </main>
  );
}
