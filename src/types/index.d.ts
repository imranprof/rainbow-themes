export type TAboutSection = {
  image1: string;
  image2: string;
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
