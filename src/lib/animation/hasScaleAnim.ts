import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger);

const hasScaleAnim = () => {
  const textMoveArray = gsap.utils.toArray(".has_scale_anim");
  textMoveArray.forEach((item: any) => {
    try {
      if (item) {
        const delayValue = item.getAttribute("data-delay") ?? 0.1;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const itemSplitted = new SplitText(item, { type: "lines" });

        gsap.set(item, { perspective: 400 });

        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: delayValue,
          autoAlpha: 0,
          scale: 2.5,
          transformOrigin: "bottom center",
          stagger: 0.3,
          ease: "back.out(1.7)"
        });
      }
    } catch (error) {
      console.error("Error in hasImageReveal:", error);
    }
  });
};

export default hasScaleAnim;
