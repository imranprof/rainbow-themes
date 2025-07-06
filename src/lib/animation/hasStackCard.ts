import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const hasStackCard = (
  stackRef: React.RefObject<HTMLDivElement>,
  cardsRef: React.RefObject<Array<HTMLDivElement | null>>,
  cardCount: number
) => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    if (!stackRef.current || !cardsRef.current || cardsRef.current.length === 0)
      return;
    cardsRef.current.forEach((card, idx) => {
      if (card && idx > 0) {
        gsap.set(card, {
          yPercent: 150,
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top top-=15%",
        end: `+=${cardCount * 500}`,
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    for (let i = 1; i < cardCount; i++) {
        tl.to(cardsRef.current[i], {
          yPercent: i * 15,
          duration: 1,
          ease: "power2.out",
        })

          .to(cardsRef.current[i - 1], {
            scale: .6 + (i * 0.1),
            duration: 0.5,
            ease: "power2.out",
          }, `<`);
    }
  });
};
