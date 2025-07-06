export type TAboutSection = {
  image1: string;
  image2: string;
  exp_img: string;
  heading: string;
  description: string;
  features: string[];
  cta: {
    text: string;
  };
  ceoDetails: {
    avatar: string;
    signature: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
};

export type TServicesSection = {
  heading: string;
  cta1: {
    text: string;
    url: string;
  };
  cta2: {
    text: string;
    url: string;
  };
  cards: {
    title: string;
    description: string;
    cta: {
      text: string;
      url: string;
    };
    image: string;
  }[];
};

type TTestimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
};

