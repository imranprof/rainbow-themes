import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import TextSlider from "@/components/slider/TextSlider";
import about from "@/content/about.json"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TextSlider />
      <About aboutData={about.aboutData} />
    </main>
  );
}
