import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const hasStackCard = (
  stackRef: React.RefObject<HTMLDivElement>,
  cardsRef: React.RefObject<Array<HTMLDivElement | null>>,
  cardCount: number
) => {
  if (!stackRef.current || !cardsRef.current || cardsRef.current.length === 0) return;

  cardsRef.current.forEach((card, idx) => {
    if (card) {
      gsap.set(card, {
        yPercent: idx === 0 ? 0 : 200,
        scale: 1,
      });
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stackRef.current,
      start: "top top-=15%",
      end: `+=${cardCount * 300}`,
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });

  for (let i = 1; i < cardCount; i++) {
    const currentCard = cardsRef.current[i];
    const prevCard = cardsRef.current[i - 1];

    if (currentCard && prevCard) {
      tl.to(currentCard, {
        yPercent: i * 15,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }).to(prevCard, {
        scale: 0.6 + i * 0.1,
        duration: 0.5,
        ease: "power2.out",
      }, "<");
    }
  }
};
